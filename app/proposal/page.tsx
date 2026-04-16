"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Key,
  Gift,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  Activity,
  Smartphone,
  Brain,
  CreditCard,
  LayoutDashboard,
  Bell,
  Hospital,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const timeline = [
  { week: "1-2주", title: "데이터 파이프라인", desc: "VitalRing API 연동 + 데이터 수집/저장" },
  { week: "3-4주", title: "AI 엔진", desc: "VITA Score + 이상감지 + AI 코칭" },
  { week: "5-6주", title: "서비스 레이어", desc: "보호자 앱 + 기관 대시보드 + 결제" },
  { week: "7-8주", title: "통합 & 연동", desc: "KakaoTalk + 파트너 API + 보안 점검" },
  { week: "9-10주", title: "파일럿 준비", desc: "500명 온보딩 + 운영 매뉴얼 + 데모" },
];

const techStack = [
  { name: "Next.js", desc: "프론트엔드" },
  { name: "Supabase", desc: "DB + Auth" },
  { name: "AI LLM", desc: "건강 분석 엔진" },
  { name: "KakaoTalk", desc: "알림 연동" },
  { name: "Toss Pay", desc: "구독 결제" },
  { name: "Tailscale", desc: "보안 네트워크" },
];

export default function ProposalPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <Badge variant="outline" className="text-accent border-accent/30">
              ZTAcom 협업 제안
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            VITA Platform
            <br />
            <span className="text-gradient">협업 제안서</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            바이탈링 API 위에 구축하는 데이터 플랫폼.
            <br />
            제안서가 아니라 실제 프로덕트로 말합니다.
          </motion.p>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent mb-6 tracking-wide uppercase"
          >
            Problem
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "제안서만 있고 플랫폼은 없다",
                desc: "보람상조, 차HC, 지자체 대상 제안서는 완성. 하지만 실제 구독/과금/운영 시스템이 부재.",
              },
              {
                title: "구독 수익 모델이 없다",
                desc: "기기 판매 일회성 매출 의존. 하드웨어 마진 42%만으로는 플랫폼 밸류에이션 불가.",
              },
              {
                title: "파트너 연계 시스템이 없다",
                desc: "의료(차HC), 보험(DB손보), 응급(119) 연계는 구상 단계. API 허브 부재.",
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
                <Card className="p-6 h-full border-destructive/20 bg-destructive/5">
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 pb-20 bg-muted/30">
        <div className="mx-auto max-w-4xl py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent mb-2 tracking-wide uppercase"
          >
            Solution
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10"
          >
            우리가 구축하는 것
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
              <Card className="p-4 text-center border-2 border-muted">
                <Activity className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs font-medium">VitalRing</p>
                <p className="text-[10px] text-muted-foreground">생체 데이터</p>
              </Card>
              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>

              <Card className="p-4 text-center border-2 border-accent gradient-vita text-white">
                <div className="space-y-1.5">
                  <p className="text-xs font-bold">VITA Platform</p>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { icon: Brain, label: "AI 엔진" },
                      { icon: CreditCard, label: "과금" },
                      { icon: LayoutDashboard, label: "대시보드" },
                      { icon: Bell, label: "알림" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-1 text-[9px] bg-white/20 rounded px-1.5 py-0.5"
                      >
                        <item.icon className="w-2.5 h-2.5" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>

              <div className="space-y-2">
                {[
                  { icon: Hospital, label: "의료 (차HC)" },
                  { icon: ShieldCheck, label: "보험 (DB손보)" },
                  { icon: Building2, label: "지자체 (226개)" },
                ].map((item) => (
                  <Card
                    key={item.label}
                    className="p-2 flex items-center gap-2"
                  >
                    <item.icon className="w-3.5 h-3.5 text-accent" />
                    <p className="text-[10px] font-medium">{item.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Deal */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What we need */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                ZTAcom에 요청
              </h3>
              <div className="space-y-4">
                <Card className="p-5 border-accent/20">
                  <div className="flex gap-3">
                    <Key className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Full API 접근권</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        실시간 바이탈 데이터 수신 Webhook + 사용자 관리 API +
                        기기 상태 API
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-5 border-accent/20">
                  <div className="flex gap-3">
                    <Server className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">
                        플랫폼 독점 운영권
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        구독 과금, 의료 연계, 보험 JV, 데이터 라이선스 사업의
                        독점 운영
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* What ZTAcom gets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium text-vita-gold mb-4 tracking-wide uppercase">
                ZTAcom이 얻는 것
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Gift,
                    title: "1~2억 상당 플랫폼 무상 구축",
                    desc: "외주 개발비 제로. 자체 기술력으로 8주 내 MVP 완성.",
                  },
                  {
                    icon: TrendingUp,
                    title: "구독 매출 로열티 (별도 협의)",
                    desc: "기기 판매 이후에도 지속적인 반복 수익(MRR) 확보.",
                  },
                  {
                    icon: Users,
                    title: "기기 판매 채널 확대",
                    desc: "보람상조 360만, 지자체 226개, 기업 B2B 채널 확보.",
                  },
                ].map((item, i) => (
                  <Card key={item.title} className="p-5">
                    <div className="flex gap-3">
                      <item.icon className="w-5 h-5 text-vita-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-20 bg-muted/30">
        <div className="mx-auto max-w-4xl py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent mb-2 tracking-wide uppercase"
          >
            Timeline
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10"
          >
            10주 MVP 로드맵
          </motion.h3>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.week}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-vita flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px h-12 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {item.week}
                    </Badge>
                    <span className="font-semibold text-sm">{item.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl pt-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent mb-6 tracking-wide uppercase"
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {techStack.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <Card className="gradient-navy p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              파워포인트가 아니라 프로덕트로 말합니다
            </h2>
            <p className="text-sm text-white/70 mb-6">
              실제 돌아가는 데모를 확인하세요
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton
                  href="/platform"
                  size="lg"
                className="bg-white text-slate-900 hover:bg-white/90">
                  플랫폼 소개
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LinkButton>
              <LinkButton
                  href="/demo/dashboard"
                  variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10">
                  기술 데모 보기
                </LinkButton>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
