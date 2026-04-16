"use client";

import { motion } from "framer-motion";
import {
  Activity,
  FileText,
  Monitor,
  BarChart3,
  Users,
  Database,
  Layers,
  ArrowRight,
  Shield,
  Heart,
  Zap,
  Smartphone,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";
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
  { icon: Target, value: "5,000억+", label: "플랫폼 전환 3년 후 기업 가치" },
  { icon: Users, value: "100,000명", label: "3년 목표 누적 구독자" },
  { icon: Database, value: "300억+", label: "3년 누적 플랫폼 매출" },
  { icon: Layers, value: "7개", label: "수익 파이프라인 동시 가동" },
];

const navCards = [
  {
    href: "/proposal",
    icon: FileText,
    title: "플랫폼 전환 제안서",
    desc: "App-First, Ring-Second 전략",
    color: "from-[#0d9488] to-[#2563eb]",
  },
  {
    href: "/platform",
    icon: Smartphone,
    title: "플랫폼 설계",
    desc: "바이탈 캐시 + 7개 수익원 + 4대 채널",
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
    desc: "3단계 로드맵 + 기업가치 시뮬레이션",
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
            App-First, Ring-Second
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
          >
            반지를 파는 회사에서
            <br />
            <span className="text-gradient">
              생체 에너지를 자산화하는 플랫폼
            </span>
            으로
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            독점계약 총판 사업자 대상
            <br />
            <span className="text-foreground font-medium">
              사업구조 전환 제안
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="glass px-4 py-5 flex flex-col items-center gap-2 text-center"
              >
                <stat.icon className="w-5 h-5 text-accent" />
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <LinkButton
              href="/proposal"
              size="lg"
              className="gradient-vita text-white border-0 px-8 h-12 text-base"
            >
              전환 제안서 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </LinkButton>
            <LinkButton
              href="/platform"
              variant="outline"
              size="lg"
              className="px-8 h-12 text-base"
            >
              플랫폼 설계
            </LinkButton>
          </motion.div>
        </div>
      </section>

      {/* Core Message */}
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
                title: "기기 판매는 '점'의 비즈니스",
                desc: "데이터 구독이라는 '면'의 비즈니스로 전환합니다. 반지는 입성하기 위한 티켓일 뿐.",
              },
              {
                icon: Shield,
                title: "건강해지면 우리가 돈을 준다",
                desc: "바이탈 캐시로 건강 행동에 보상. 포인트를 잃기 싫어서 앱을 끄지 못하는 심리적 락인.",
              },
              {
                icon: Zap,
                title: "7개 수도꼭지 동시 가동",
                desc: "하나가 막혀도 나머지 6개가 흐르는 구조. 하드웨어 사업보다 근본적으로 강한 이유.",
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

      {/* The Question */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 gradient-navy text-white border-0">
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                애플은 아이폰을 파는 회사인가,
                <br />
                앱스토어를 운영하는 회사인가?
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                애플의 하드웨어 마진은 약 40%. 그러나 앱스토어/구독 서비스의
                영업이익률은 70%를 넘습니다.
                <br />
                바이탈링도 지금 이 선택의 기로에 있습니다.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-6">
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
                <a href={card.href}>
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
                </a>
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
