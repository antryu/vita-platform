"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Brain,
  Shield,
  Heart,
  Bell,
  Smartphone,
  Monitor,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Users,
  Building2,
  Dumbbell,
  Home,
  HardHat,
  Stethoscope,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const tiers = [
  {
    name: "VITA Basic",
    price: "19,900",
    target: "개인 건강관리",
    features: [
      "VITA Score 일일 리포트",
      "수면/스트레스 분석",
      "AI 건강 코칭",
      "KakaoTalk 알림",
    ],
    highlight: false,
  },
  {
    name: "VITA Premium",
    price: "29,900",
    target: "가족 돌봄",
    features: [
      "Basic 전체 기능",
      "보호자 실시간 모니터링",
      "24시간 AI 관제",
      "월 1회 차HC 원격 상담",
      "이상 징후 자동 에스컬레이션",
    ],
    highlight: true,
  },
  {
    name: "VITA Platinum",
    price: "49,900",
    target: "프리미엄 케어",
    features: [
      "Premium 전체 기능",
      "가족 전원 알림",
      "무제한 차HC 상담",
      "분기별 건강검진 할인",
      "응급 119 자동 연동",
      "전담 케어 매니저",
    ],
    highlight: false,
  },
];

const segments = [
  {
    icon: Users,
    title: "시니어 돌봄",
    desc: "독거노인 24시간 모니터링, 고독사 제로",
    stat: "대상 230만명",
  },
  {
    icon: HardHat,
    title: "산업 안전",
    desc: "중대재해법 대응, 사전배치 통제 시스템",
    stat: "300~500명 파일럿",
  },
  {
    icon: Dumbbell,
    title: "스포츠",
    desc: "선수 수면/회복/컨디션 팀 단위 관리",
    stat: "용인FC 도입",
  },
  {
    icon: Home,
    title: "가족 케어",
    desc: "자녀가 부모님 건강을 실시간 확인",
    stat: "360° 패밀리 케어",
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="text-gradient">VITA</span> Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            AI 기반 24시간 365일 실시간 건강 모니터링 & 즉시 대응
          </motion.p>
        </div>
      </section>

      {/* Data Flow */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Activity, label: "Ring", sub: "생체 측정" },
              { icon: Smartphone, label: "Phone", sub: "BLE 전송" },
              { icon: Brain, label: "Cloud AI", sub: "실시간 분석" },
              { icon: Bell, label: "Alert", sub: "이상 감지" },
              { icon: Shield, label: "Action", sub: "즉시 대응" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl gradient-vita flex items-center justify-center mx-auto mb-2">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-medium">{step.label}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {step.sub}
                  </p>
                </div>
                {i < 4 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3 Core Services — Tabs */}
      <section className="px-6 pb-20 bg-muted/30">
        <div className="mx-auto max-w-4xl py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Core Services
          </motion.h2>

          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="health">건강 분석</TabsTrigger>
              <TabsTrigger value="safety">안전 관제</TabsTrigger>
              <TabsTrigger value="care">커넥티드 케어</TabsTrigger>
            </TabsList>

            <TabsContent value="health">
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      VITA Score (0-100)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      수면, 스트레스, 심박, 활동량을 종합한 일일 건강 점수.
                      개인별 기준선 대비 변화를 AI가 분석합니다.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "수면 분석", score: 82 },
                        { label: "스트레스 회복", score: 71 },
                        { label: "심박 안정성", score: 90 },
                        { label: "활동량", score: 65 },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span>{item.label}</span>
                            <span className="font-medium">{item.score}점</span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full gradient-vita rounded-full transition-all duration-1000"
                              style={{ width: `${item.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "HRV 기반 자율신경 균형도 분석",
                      "부정맥 전조 증상 조기 감지",
                      "개인 맞춤 AI 코칭 메시지",
                      "7일/30일 트렌드 분석",
                      "병원급 스트레스 정밀 보고서",
                    ].map((feat) => (
                      <div key={feat} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="safety">
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      실시간 이상감지 + 자동 대응
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      생체 이상 신호를 3단계로 감지하고, 골든타임 내 자동
                      에스컬레이션합니다.
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          trigger: "제스처 SOS",
                          desc: "손가락 제스처로 즉각 구조 요청",
                        },
                        {
                          trigger: "심박 급상승",
                          desc: "과호흡, 쇼크 등 위험 상태 자동 감지",
                        },
                        {
                          trigger: "SpO2 이상",
                          desc: "산소 결핍 (밀폐공간, 지하시설) 포착",
                        },
                      ].map((item) => (
                        <Card key={item.trigger} className="p-3 bg-destructive/5 border-destructive/20">
                          <p className="text-sm font-medium">{item.trigger}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.desc}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      3단계 자동 대응
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          step: "1단계",
                          action: "KakaoTalk 긴급 알림",
                          desc: "보호자/관리자에게 위치 + 상태 즉시 전송",
                          time: "즉시",
                        },
                        {
                          step: "2단계",
                          action: "보호자 AI 콜",
                          desc: "미응답 시 등록된 보호자에게 음성 자동 발신",
                          time: "5분",
                        },
                        {
                          step: "3단계",
                          action: "119 자동 호출",
                          desc: "위험 기준 도달 시 자동 신고 + 위치 전송",
                          time: "15분",
                        },
                      ].map((item) => (
                        <div key={item.step} className="flex gap-3">
                          <Badge
                            variant={
                              item.step === "3단계" ? "destructive" : "secondary"
                            }
                            className="shrink-0 mt-0.5"
                          >
                            {item.step}
                          </Badge>
                          <div>
                            <p className="text-sm font-medium">{item.action}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="care">
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      보호자 중심 설계
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      고령자는 앱을 다루지 않습니다. 자녀가 부모를 보살피는
                      보호자 중심 관제 모델입니다.
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          icon: Smartphone,
                          label: "보호자 앱",
                          desc: "부모 심박/수면/위치를 자녀 스마트폰에서 실시간 확인",
                        },
                        {
                          icon: Monitor,
                          label: "기관 대시보드",
                          desc: "수백 명을 동시 관제. 이상 징후 자동 에스컬레이션",
                        },
                        {
                          icon: Phone,
                          label: "KakaoTalk 연동",
                          desc: "별도 앱 설치 없이 카카오톡으로 SOS/건강 리포트 수신",
                        },
                      ].map((item) => (
                        <div key={item.label} className="flex gap-3">
                          <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">{item.label}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4">파트너 연계</h4>
                    <div className="space-y-3">
                      {[
                        {
                          icon: Stethoscope,
                          label: "차헬스케어 원격진료",
                          desc: "이상 감지 시 24시간 내 전문의 상담 연결",
                        },
                        {
                          icon: Shield,
                          label: "보험사 건강점수 연동",
                          desc: "VITA Score 기반 보험료 할인 + 건강 리워드",
                        },
                        {
                          icon: Building2,
                          label: "지자체 통합돌봄",
                          desc: "226개 시군구 돌봄통합지원법 연계 관제",
                        },
                      ].map((item) => (
                        <Card key={item.label} className="p-3">
                          <div className="flex gap-2">
                            <item.icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">
                                {item.label}
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-2"
          >
            VITA CARE Membership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mb-8"
          >
            기기 별도 구매 + 월 구독
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pt-2"
              >
                <Card
                  className={`p-6 h-full flex flex-col overflow-visible ${
                    tier.highlight
                      ? "border-accent shadow-lg relative"
                      : ""
                  }`}
                >
                  {tier.highlight && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-vita text-white border-0 z-10">
                      추천
                    </Badge>
                  )}
                  <div className="mb-4">
                    <h3 className="font-semibold">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {tier.target}
                    </p>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      원/월
                    </span>
                  </div>
                  <div className="space-y-2.5 flex-1">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="px-6 pb-20 bg-muted/30">
        <div className="mx-auto max-w-4xl py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Target Segments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-vita flex items-center justify-center shrink-0">
                      <seg.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{seg.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {seg.desc}
                      </p>
                      <Badge variant="secondary" className="mt-2 text-[10px]">
                        {seg.stat}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl pt-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Validated & Proven
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "5", label: "상급종합병원 IRB" },
              { value: "6+", label: "지자체 시범사업" },
              { value: "9,385+", label: "사용자" },
              { value: "74M+", label: "건강 데이터" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <p className="text-3xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
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
            <h2 className="text-2xl font-bold mb-3">직접 확인하세요</h2>
            <p className="text-sm text-white/70 mb-6">
              실제 운영 중인 대시보드 데모를 체험해 보세요
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton
                  href="/demo/dashboard"
                  size="lg"
                className="bg-white text-slate-900 hover:bg-white/90">
                  라이브 데모
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LinkButton>
              <LinkButton
                  href="/business-plan"
                  variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10">
                  사업계획서
                </LinkButton>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
