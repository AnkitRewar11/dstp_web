"use client";
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "DSTP Web shipped our SaaS migration on time with zero downtime.",
    name: "Aditi Sharma",
    role: "Head of Engineering",
    company: "Northwind",
    avatar: "AS",
  },
  {
    quote: "Their automation quietly removed hours of repetitive ops work.",
    name: "Rohan Patel",
    role: "VP Operations",
    company: "Nimbus Labs",
    avatar: "RP",
  },
  {
    quote: "We finally have one clean view across cloud, data, and devices.",
    name: "Meera Iyer",
    role: "CTO",
    company: "Flux Industrial",
    avatar: "MI",
  },
  {
    quote: "The team understood our domain and shipped without drama.",
    name: "Arjun Verma",
    role: "Product Lead",
    company: "Helio Systems",
    avatar: "AV",
  },
  {
    quote: "Reliability improved overnight. Their infra work is meticulous.",
    name: "Kavya Nair",
    role: "Engineering Manager",
    company: "Driftwork",
    avatar: "KN",
  },
];

const avatarColors = [
  { bg: "#1e293b", ring: "#38bdf8", text: "#e0f2fe" },
  { bg: "#1a2e1a", ring: "#4ade80", text: "#dcfce7" },
  { bg: "#2d1a2e", ring: "#c084fc", text: "#f3e8ff" },
  { bg: "#2e1a1a", ring: "#f87171", text: "#fee2e2" },
  { bg: "#1a2a2e", ring: "#34d399", text: "#d1fae5" },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 24V14.4C0 10.56 0.96 7.44 2.88 5.04C4.8 1.68 7.92 0 12.24 0L13.44 2.4C10.72 3.04 8.72 4.32 7.44 6.24C6.16 8.16 5.52 10.08 5.52 12H10.08V24H0ZM18.56 24V14.4C18.56 10.56 19.52 7.44 21.44 5.04C23.36 1.68 26.48 0 30.8 0L32 2.4C29.28 3.04 27.28 4.32 26 6.24C24.72 8.16 24.08 10.08 24.08 12H28.64V24H18.56Z"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof testimonials)[0];
  index: number;
}) {
  const colorIdx = index % avatarColors.length;
  const color = avatarColors[colorIdx];

  return (
    <figure
      className="testimonial-card"
      style={{
        minWidth: "300px",
        maxWidth: "340px",
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        border: "1px solid rgba(148,163,184,0.1)",
        background:
          "linear-gradient(145deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)",
        padding: "28px",
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.4), 0 20px 40px -10px rgba(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow =
          "0 8px 12px -2px rgba(0,0,0,0.5), 0 28px 50px -8px rgba(0,0,0,0.6)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow =
          "0 4px 6px -1px rgba(0,0,0,0.4), 0 20px 40px -10px rgba(0,0,0,0.5)";
      }}
    >
      {/* Subtle glow accent */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color.ring}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote icon + text */}
      <div style={{ position: "relative", flex: 1 }}>
        <div
          style={{
            position: "absolute",
            top: "-4px",
            left: "-2px",
            color: color.ring,
          }}
        >
          <QuoteIcon />
        </div>
        <blockquote
          style={{
            margin: 0,
            paddingTop: "4px",
            fontSize: "14px",
            lineHeight: "1.75",
            color: "#cbd5e1",
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            letterSpacing: "0.01em",
          }}
        >
          {item.quote}
        </blockquote>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(148,163,184,0.12), transparent)",
          margin: "20px 0",
        }}
      />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: color.bg,
            border: `2px solid ${color.ring}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: 700,
            color: color.text,
            fontFamily: "monospace",
            flexShrink: 0,
            boxShadow: `0 0 0 4px ${color.ring}10`,
          }}
        >
          {item.avatar}
        </div>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 600,
              color: "#f1f5f9",
              fontFamily: "'Trebuchet MS', sans-serif",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              margin: "2px 0 0",
              fontSize: "11px",
              color: "#64748b",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.role},{" "}
            <span style={{ color: color.ring, opacity: 0.85 }}>
              {item.company}
            </span>
          </p>
        </div>
        <div
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#10b981",
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.18)",
            padding: "3px 8px",
            borderRadius: "999px",
          }}
        >
          Verified
        </div>
      </div>
    </figure>
  );
}

function Testimonials() {
  const items = [...testimonials, ...testimonials];
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.45; // px per frame

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section
      style={{
        background: "#020817",
        padding: "96px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(56,189,248,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          marginBottom: "56px",
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#38bdf8",
            marginBottom: "12px",
            fontFamily: "monospace",
          }}
        >
          ✦ Testimonials ✦
        </p>
        <h2
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#f8fafc",
            fontFamily: "'Trebuchet MS', 'Georgia', serif",
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
          }}
        >
          Loved by modern teams.
        </h2>
        <p
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#64748b",
          }}
        >
          SaaS and industrial teams rely on DSTP Web to keep their platforms
          resilient, observable, and fast.
        </p>
      </div>

      {/* Scrolling track */}
      <div style={{ position: "relative" }}>
        {/* Fade masks */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "0",
            zIndex: 10,
            background:
              "linear-gradient(to right, #020817 0%, transparent 12%, transparent 88%, #020817 100%)",
          }}
        />

        <div
          style={{ overflow: "hidden", padding: "16px 0" }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "20px",
              width: "max-content",
              willChange: "transform",
              paddingLeft: "20px",
            }}
          >
            {items.map((item, index) => (
              <TestimonialCard
                key={`${item.name}-${index}`}
                item={item}
                index={index % testimonials.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;