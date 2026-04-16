"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Coins,
  Moon,
  Zap,
  Heart,
  Users,
  Megaphone,
  ShoppingBag,
  Database,
  Shield,
  Star,
  Smartphone,
  Building2,
  Dumbbell,
  Home,
  HardHat,
  CheckCircle2,
  Gift,
  TrendingUp,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LinkButton } from "@/components/link-button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const earningTable = [
  { action: "숙면 달성", metric: "목표 수면 시간 + 깊은수면 비율 달성", points: "500P/일", message: "밤새 충전" },
  { action: "아침 준비도 상승", metric: "Readiness Score 전날 대비 +5점 이상", points: "300P/일", message: "회복 보상" },
  { action: "스트레스 관리", metric: "HRV 목표치 3일 연속 유지", points: "300P/일", message: "마음 챙김" },
  { action: "가족 안부 연결", metric: "가족 앱 연동 후 이모지 교환", points: "양측 200P", message: "효도 연결" },
  { action: "팬덤 챌린지 참여", metric: "팬클럽 단체 건강 미션 주간 달성", points: "1,000P/주", message: "덕질 보상" },
  { action: "약 복용 인증", metric: "시니어 알림 연동 복용 인증", points: "100P/회", message: "습관 보상" },
];

const revenueStreams = [
  { id: 1, name: "구독 SaaS", share: "35%", desc: "B2C 월정액 19,900~29,900원 / B2B 관제 대시보드 5~20만원/월", icon: TrendingUp },
  { id: 2, name: "디바이스 판매", share: "15%", desc: "플랫폼 진입 도구화. 렌탈 49,000 선납 + 월정액. 마진 최소화 → 모수 극대화", icon: Smartphone },
  { id: 3, name: "광고 AD-Tech", share: "25%", desc: "생체 지표 기반 초정밀 타겟팅 광고. 제약사/보험사/병원/식품사 광고주 유치", icon: Megaphone },
  { id: 4, name: "커머스 수수료", share: "12%", desc: "바이탈 몰 입점 브랜드 매출의 15~30% 수수료. 생체 데이터 기반 큐레이션", icon: ShoppingBag },
  { id: 5, name: "데이터 B2B", share: "8%", desc: "비식별화 건강 데이터를 제약사/보험사/지자체에 분석 솔루션 형태로 제공", icon: Database },
  { id: 6, name: "보험 손해율 분담", share: "3%", desc: "구독자 건강 개선 → 보험 청구 감소분의 일정 비율을 인센티브로 역분배", icon: Shield },
  { id: 7, name: "팬덤/이벤트", share: "2%", desc: "임영웅 에디션 한정판, 팬 챌린지 우승 리워드, 아티스트 콜라보 굿즈 커머스", icon: Star },
];

const channels = [
  {
    id: "A",
    icon: Home,
    title: "시니어/효도 채널",
    tagline: "부모님의 건강이 자녀의 안심이다",
    services: ["효도 리워드 시스템: 자녀가 부모 구독료 결제 → 부모 건강 미션 달성 → 자녀 앱에 포인트 적립", "자녀 포인트 현금화 또는 상조 포인트 전환 → 구독 이탈 방지 동시 해결"],
    partners: "보람상조, 우체국 보험, 지역 복지관, 요양원, 지자체 독거노인 사업",
  },
  {
    id: "B",
    icon: Star,
    title: "트로트 팬덤 채널",
    tagline: "팬심이 곧 건강이다",
    services: ["임영웅 육성 모닝 건강 알림 + 팬클럽 단체 건강 챌린지", "콘서트장 CHA x 바이탈링 체험존: 심박수 측정 이벤트 + 현장 구매 즉시 굿즈 증정", "팬클럽 앰배서더 200~300명이 지역 영업팀이 되는 구조"],
    partners: "향후 글로벌 K-pop 아이돌 확장",
  },
  {
    id: "C",
    icon: Dumbbell,
    title: "액티브 직장인 채널",
    tagline: "번아웃이 비용이다, 회복이 자산이다",
    services: ["기업 HR 웰니스 구독", "스트레스 지수(HRV) 개선 시 DB손해보험 보험료 캐시백", "'번아웃 방지 챌린지': 월 스트레스 관리 달성 시 커피 쿠폰/교통비 리워드"],
    partners: "DB손해보험, 대기업 복지몰, 기업 HR 솔루션사",
  },
  {
    id: "D",
    icon: Building2,
    title: "지자체/B2G 채널",
    tagline: "고독사 제로, 복지의 인프라",
    services: ["지자체가 독거노인 1인당 29,900원/월 대납 → 전국 300만 독거노인 시장", "1~2시간 활동 없으면 담당자/자녀 자동 알림 → 방문 케어 빈도 50% 절감", "지자체 예산 논리: '방문 케어 공무원 1인 인건비'보다 훨씬 저렴한 디지털 안전망"],
    partners: "광주서구, 제천시, 화성시 (검증 완료)",
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">VITA</span> Platform 설계
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-xl mx-auto">
            바이탈 캐시 + 7개 수익원 + 4대 채널
          </motion.p>
        </div>
      </section>

      {/* PART 3: 바이탈 캐시 */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 3. 바이탈 캐시 (Vital Cash)</h2>
          <h3 className="text-2xl font-bold mb-2">플랫폼의 심장 설계</h3>
          <p className="text-sm text-muted-foreground mb-8">
            오우라도, 갤럭시도 제공한 적 없는 차별적 리워드 구조.
            사용자는 링을 구매한 것이 아니라, &apos;매일 포인트를 생산할 수 있는 자산&apos;을 획득했다고 인식하게 됩니다.
          </p>

          {/* Earning Table */}
          <Card className="p-5 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Coins className="w-5 h-5 text-vita-gold" />
              <h4 className="font-semibold">포인트 적립 체계 — &apos;자면서 돈을 번다&apos;</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2">건강 행동</th>
                    <th className="text-left py-2">측정 지표</th>
                    <th className="text-right py-2">지급 포인트</th>
                    <th className="text-right py-2">메시지</th>
                  </tr>
                </thead>
                <tbody>
                  {earningTable.map((row) => (
                    <tr key={row.action} className="border-b last:border-0">
                      <td className="py-2 font-medium">{row.action}</td>
                      <td className="py-2 text-muted-foreground text-xs">{row.metric}</td>
                      <td className="py-2 text-right text-accent font-medium">{row.points}</td>
                      <td className="py-2 text-right text-xs text-muted-foreground">{row.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Burning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-5 bg-accent/5 border-accent/20">
              <Gift className="w-5 h-5 text-accent mb-2" />
              <h4 className="text-sm font-semibold mb-1">구독료 차감</h4>
              <p className="text-xs text-muted-foreground">적립 포인트로 월 구독료 직접 결제 가능. 성실히 수행하면 &apos;무료 건강 관리 서비스&apos;라는 인식 형성.</p>
            </Card>
            <Card className="p-5">
              <ShoppingBag className="w-5 h-5 text-vita-gold mb-2" />
              <h4 className="text-sm font-semibold mb-1">바이탈 몰 (Vital Mall)</h4>
              <p className="text-xs text-muted-foreground">CHA 건강검진 할인권 / 건강기능식품/영양제 / 시니어 프리미엄 여행 / 트로트 아티스트 한정 굿즈</p>
            </Card>
            <Card className="p-5">
              <Shield className="w-5 h-5 text-muted-foreground mb-2" />
              <h4 className="text-sm font-semibold mb-1">외부 파트너 혜택</h4>
              <p className="text-xs text-muted-foreground">보람상조 납입금 할인 / DB손해보험 보험료 캐시백 / 지역 약국 우선 배송 쿠폰</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PART 4: 7개 수익원 */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 4. 수익 파이프라인</h2>
          <h3 className="text-2xl font-bold mb-2">7개 수도꼭지 구조</h3>
          <p className="text-sm text-muted-foreground mb-8">
            하나의 수익원이 막혀도 나머지 6개가 흐르는 구조. 이것이 플랫폼 사업이 하드웨어 사업보다 근본적으로 강한 이유입니다.
          </p>

          <div className="space-y-3">
            {revenueStreams.map((stream, i) => (
              <motion.div key={stream.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-2 shrink-0 w-24">
                      <Badge variant="secondary" className="text-[10px]">
                        {stream.share}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <stream.icon className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold">{stream.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{stream.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] text-muted-foreground mt-4 text-center">
            * 성숙기(3년 이후) 기준 매출 비중 추산. 초기에는 구독+디바이스 중심으로 시작하여 광고/커머스/데이터 비중이 점진 확대.
          </p>

          {/* AD-Tech Highlight */}
          <Card className="p-6 mt-6 bg-accent/5 border-accent/20">
            <h4 className="text-sm font-semibold mb-3">광고 파이프라인 — 왜 구글/유튜브보다 강한가</h4>
            <p className="text-xs text-muted-foreground mb-3">
              구글/유튜브는 &apos;관심사&apos;를 기반으로 광고합니다. 그러나 바이탈링은 &apos;실제 생체 상태&apos;를 기반으로 광고합니다.
              이것은 업계에 존재하지 않던 새로운 카테고리의 광고 상품입니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="text-left py-1.5">감지 생체 지표</th>
                    <th className="text-left py-1.5">타겟 광고 상품</th>
                    <th className="text-left py-1.5">광고주</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["수면 무호흡 징후 감지", "수면 클리닉 정밀검진 패키지", "대학병원/CHA 건강검진센터"],
                    ["HRV 낮음 (고스트레스)", "스트레스 완화 영양제/홍삼/L-테아닌", "한미/종근당/GNM자연의품격"],
                    ["심박수 이상 패턴", "심장내과 조기 검진 패키지", "삼성서울/서울아산/CHA병원"],
                    ["활동량 우수 (액티브 시니어)", "프리미엄 시니어 여행 상품", "한국관광공사/시니어 전문 여행사"],
                    ["수면 질 3일 연속 저하", "고보습 야간 스킨케어 제품 큐레이션", "자사 화장품 브랜드 (첫 번째 입점 모델)"],
                    ["고령/독거 감지", "상조 서비스/역모기지/유언 법률 서비스", "보람상조/현대라이프/법무법인"],
                  ].map(([bio, ad, advertiser], i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-1.5">{bio}</td>
                      <td className="py-1.5">{ad}</td>
                      <td className="py-1.5 text-muted-foreground">{advertiser}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* PART 5: 4대 채널 */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-12">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 5. B2C 채널별 타겟 전략</h2>
          <h3 className="text-2xl font-bold mb-8">4대 채널 동시 공략</h3>

          <div className="space-y-6">
            {channels.map((ch, i) => (
              <motion.div key={ch.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-vita flex items-center justify-center shrink-0">
                      <ch.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-[10px]">채널 {ch.id}</Badge>
                        <h4 className="font-semibold text-sm">{ch.title}</h4>
                      </div>
                      <p className="text-xs text-accent font-medium mb-3">&apos;{ch.tagline}&apos;</p>
                      <div className="space-y-1.5 mb-3">
                        {ch.services.map((svc, j) => (
                          <div key={j} className="flex gap-2 items-start">
                            <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground">{svc}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        <span className="font-medium">연계 파트너:</span> {ch.partners}
                      </p>
                    </div>
                  </div>
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
            <h2 className="text-xl font-bold mb-2">총판 Win-Win 구조 + 3년 로드맵</h2>
            <p className="text-sm text-white/70 mb-6">
              총판 수수료 구조, 디바이스 확장 로드맵, 기업가치 시뮬레이션
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton href="/business-plan" size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                사업계획서
                <ArrowRight className="w-4 h-4 ml-2" />
              </LinkButton>
              <LinkButton href="/demo/dashboard" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                데모 보기
              </LinkButton>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
