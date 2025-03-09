import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Importando GSAP para animações

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let points: Point[] = [];
        let target = { x: width / 2, y: height / 2 };
        let animateHeader = true;

        // Definição da classe Point
        class Point {
            x: number;
            y: number;
            originX: number;
            originY: number;
            closest: Point[];
            circle: Circle;
            active: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.closest = [];
                this.circle = new Circle(this, 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
                this.active = 0;
            }
        }

        // Definição da classe Circle
        class Circle {
            pos: Point;
            radius: number;
            color: string;
            active: number;

            constructor(pos: Point, radius: number, color: string) {
                this.pos = pos;
                this.radius = radius;
                this.color = color;
                this.active = 0;
            }

            draw() {
                if (!this.active) return;
                ctx!.beginPath(); // Usa o operador de não-nulo
                ctx!.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
                ctx!.fillStyle = `rgba(156,217,249,${this.active})`;
                ctx!.fill();
            }
        }

        // Inicialização dos pontos
        const initHeader = () => {
            canvas.width = width;
            canvas.height = height;

            // Cria os pontos
            for (let x = 0; x < width; x += width / 20) {
                for (let y = 0; y < height; y += height / 20) {
                    const px = x + Math.random() * (width / 20);
                    const py = y + Math.random() * (height / 20);
                    const p = new Point(px, py);
                    points.push(p);
                }
            }

            // Encontra os 5 pontos mais próximos para cada ponto
            for (let i = 0; i < points.length; i++) {
                const closest: Point[] = [];
                const p1 = points[i];
                for (let j = 0; j < points.length; j++) {
                    const p2 = points[j];
                    if (p1 !== p2) {
                        let placed = false;
                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] === undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }
        };

        // Função para calcular a distância entre dois pontos
const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
};

        // Função para animar os pontos
        const animate = () => {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (const point of points) {
                    // Detecta pontos no alcance
                    if (Math.abs(getDistance(target, point)) < 4000) {
                        point.active = 0.3;
                        point.circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, point)) < 20000) {
                        point.active = 0.1;
                        point.circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, point)) < 40000) {
                        point.active = 0.02;
                        point.circle.active = 0.1;
                    } else {
                        point.active = 0;
                        point.circle.active = 0;
                    }

                    drawLines(point);
                    point.circle.draw();
                }
            }
            requestAnimationFrame(animate);
        };

        // Função para desenhar as linhas entre os pontos
        const drawLines = (p: Point) => {
            if (!p.active) return;
            for (const closestPoint of p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(closestPoint.x, closestPoint.y);
                ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
                ctx.stroke();
            }
        };

        // Função para mover os pontos
        const shiftPoint = (p: Point) => {
            gsap.to(p, {
                duration: 1 + Math.random(),
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: "circ.inOut",
                onComplete: () => {
                    shiftPoint(p);
                },
            });
        };

        // Inicialização
        initHeader();
        for (const point of points) {
            shiftPoint(point);
        }
        animate();

        // Event listeners
        const handleMouseMove = (e: MouseEvent) => {
            target.x = e.pageX;
            target.y = e.pageY;
        };

        const handleScroll = () => {
            animateHeader = document.body.scrollTop <= height;
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Limpeza dos event listeners
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
            }}
        />
    );
};

export default AnimatedBackground;