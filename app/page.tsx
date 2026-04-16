"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  FileText,
  Monitor,
  BarChart3,
  Users,
  Database,
  Clock,
  ArrowRight,
  Shield,
  Heart,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const stats = [
  { icon: Users, value: "9,385+", label: "Active Users" },
  { icon: Database, value: "74M+", label: "Health Records" },
  { icon: Clock, value: "24/7", label: "Real-time Monitoring" },
];

const navCards = [
  {
    href: "/proposal",
    icon: FileText,
    title: "본사 협업 제안서",
    desc: "API 연동 + 플랫폼 독점 운영권 제안",
    color: "from-[#0d9488] to-[#2563eb]",
  },
  {
    href: "/platform",
    icon: Shield,
    title: "플랫폼 소개",
    desc: "VITA CARE 서비스 + 멤버십 구조",
    color: "from-[#1e293b] to-[#334155]",
  },
  {
    href: "/demo/dashboard",
    icon: Monitor,
    title: "라이브 데모",
    desc: "기관 대시보드 + 보호자 앱 실제 화면",
    color: "from-[#dc2626] to-[#ea580c]",
  },
  {
    href: "/business-plan",
    icon: BarChart3,
    title: "사업계획서",
    desc: "수익 모델 + 3개년 재무 전망",
    color: "from-[#d97706] to-[#ca8a04]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-8"
          >
            <Activity className="w-4 h-4" />
            Powered by VitalRing AI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-gradient">VITA</span>
            <span className="text-foreground"> Platform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            바이탈링 생체 데이터가 만드는
            <br />
            <span className="text-foreground font-medium">
              커넥티드 케어 생태계
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="glass px-8 py-5 flex items-center gap-4"
              >
                <stat.icon className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <LinkButton
                  href="/proposal"
                  size="lg"
              className="gradient-vita text-white border-0 px-8 h-12 text-base">
                  본사 제안서
                <ArrowRight className="w-4 h-4 ml-2" />
                </LinkButton>
            <LinkButton
                  href="/platform"
                  variant="outline"
              size="lg"
              className="px-8 h-12 text-base">
                  플랫폼 소개
                </LinkButton>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {[
              {
                icon: Heart,
                title: "건강의 조기 경보",
                desc: "개인에게는 AI가 분석한 건강 점수와 이상 징후를 실시간 알림",
              },
              {
                icon: Shield,
                title: "가족의 안심",
                desc: "보호자에게는 부모님 건강 상태를 언제 어디서나 확인하는 앱",
              },
              {
                icon: Zap,
                title: "돌봄의 연결망",
                desc: "사회에는 의료-보험-지자체를 잇는 데이터 기반 케어 인프라",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full shadow-sm hover:shadow-md transition-shadow dark:border-white/[0.06]">
                  <div className="w-12 h-12 rounded-xl gradient-vita flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12"
          >
            Documents
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {navCards.map((card, i) => (
              <motion.div
                key={card.href}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={card.href}>
                  <Card className="group p-6 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative">
                    <div
                      className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${card.color}`}
                    />
                    <div className="flex items-start gap-4 pl-4">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0`}
                      >
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {card.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all ml-auto mt-1 group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-vita flex items-center justify-center">
              <Activity className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              VITA Platform by{" "}
              <span className="font-medium text-foreground">_y Holdings</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Powered by VitalRing (ZTAcom) AI IoT Healthcare
          </p>
        </div>
      </footer>
    </div>
  );
}
