import React from 'react';
import { Zap, ShieldCheck, Cpu, Code2, Database, Rocket, Lock } from 'lucide-react';

export default function MarqueeStrip() {
  const items = [
    "07 MICROSERVICES ARCHITECTURE",
    "0% MESSAGE LOST RATE (RABBITMQ DLQ)",
    "POSTGRESQL GIN QUERY < 8MS",
    "VIETQR AUTO RECONCILIATION < 0.5S (0đ PHÍ)",
    "NEO4J GRAPHRAG ANTI-HALLUCINATION",
    "ESCROW 40% CỌC — 60% NGHIỆM THU THẬT",
    "100% CLEAN ARCHITECTURE .NET 8 & JAVA 21",
    "REDIS CONCURRENCY DISTRIBUTED LOCK 15P"
  ];

  return (
    <div className="w-full bg-[#FF5500] text-black overflow-hidden py-2.5 select-none font-mono text-xs font-extrabold tracking-widest border-y border-orange-400">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4 whitespace-nowrap">
            <span>{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
