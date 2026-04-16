"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Lock,
  Building2,
  TrendingUp,
  AlertTriangle,
  Calendar,
  DollarSign,
  Users,
  Target,
  ShieldAlert,
  Globe,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const revenue = [
  { stream: "구독 SaaS", desc: "VITA CARE 월 구독료", partner: "플랫폼 주수익" },
  { stream: "의료 연계", desc: "차HC 원격진료 수수료", partner: "차HC 주수혜" },
  { stream: "보험 JV", desc: "건강점수 기반 보험 수수료 10-20%", partner: "3사 공동" },
  { stream: "데이터 라이선스", desc: "익명화 생체 데이터 제약사 판매", partner: "3사 공동 분배" },
  { stream: "B2G 관제", desc: "지자체 시스템 구축 + 월 관제료", partner: "3사 공동 수주" },
  { stream: "기기 마진", desc: "도매 마크업", partner: "ZTAcom 주수혜" },
];

const projection = [
  { year: "2026", users: "5,000", revenue: "100", cost: "62", profit: "38", roi: "61%" },
  { year: "2027", users: "30,000", revenue: "310", cost: "155", profit: "155", roi: "100%" },
  { year: "2028", users: "80,000", revenue: "520", cost: "210", profit: "310", roi: "148%" },
];

const milestones = [
  { period: "2026 Q2", name: "Launchpad", tasks: "3자 MOU 체결, VITA CARE 설계, 파일럿 500명", kpi: "순추천지수 60+" },
  { period: "2026 Q4", name: "Scale-Up", tasks: "VITA Premium 론칭, B2G 3건 수주, 보험 JV 협의", kpi: "5,000명" },
  { period: "2027", name: "Ecosystem", tasks: "보험 JV 가동, 요양 SaaS 300개소, 일본 1단계", kpi: "3만명, 310억" },
  { period: "2028~", name: "Market Leader", tasks: "데이터 라이선스, 실버타운 5개, 글로벌 2개국", kpi: "8만명, 3,000억+ 밸류" },
];

const risks = [
  { risk: "개인정보/의료데이터 보안", level: "high", mitigation: "ISMS-P 인증, GDPR 준수, 데이터 이원화" },
  { risk: "의료법 원격진료 규제", level: "high", mitigation: "차HC 법무팀 사전 검토, 허용 범위 내 서비스" },
  { risk: "디바이스 품질/AS", level: "medium", mitigation: "SLA 오류율 1% 미만, 전국 AS 네트워크" },
  { risk: "회원 초기 수용성 저조", level: "medium", mitigation: "파일럿 500명 사전 검증, 순추천지수 60 미달 시 재설계" },
  { risk: "빅테크 진입 (삼성 B2B)", level: "low", mitigation: "4대 진입장벽 + 독점 공급 계약" },
];

function riskColor(level: string) {
  if (level === "high") return "bg-red-500/10 text-red-600 border-red-200";
  if (level === "medium") return "bg-amber-500/10 text-amber-600 border-amber-200";
  return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
}

export default function BusinessPlanPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Badge variant="outline" className="text-muted-foreground">
              <Lock className="w-3 h-3 mr-1" />
              Confidential
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="text-gradient">VITA Platform</span>
            <br />
            사업계획서
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            내부 문서 — 수익 모델 + 3개년 재무 전망
          </motion.p>
        </div>
      </section>

      {/* Entity Structure */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            Entity Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-5 text-center">
              <Building2 className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-semibold text-sm">본사 (ZTAcom)</h3>
              <p className="text-xs text-muted-foreground mt-1">
                하드웨어 + SW + AI + 특허
              </p>
              <Separator className="my-3" />
              <p className="text-[10px] text-muted-foreground">
                기기 공급 + API 제공
              </p>
            </Card>
            <Card className="p-5 text-center">
              <Users className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-semibold text-sm">영업법인</h3>
              <p className="text-xs text-muted-foreground mt-1">
                BD + 채널 + 파트너십
              </p>
              <Separator className="my-3" />
              <p className="text-[10px] text-muted-foreground">
                고객 유입 + 영업 수수료
              </p>
            </Card>
            <Card className="p-5 text-center border-accent">
              <Target className="w-6 h-6 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold text-sm text-accent">
                VITA Platform
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                구독 + 데이터 + 서비스 연결
              </p>
              <Separator className="my-3" />
              <p className="text-[10px] text-accent font-medium">
                플랫폼 구축 + 운영 주체
              </p>
            </Card>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-xs text-muted-foreground">
              법인 간 계약으로 연결 — 지분 공유 없음
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h2 className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            Revenue Streams
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium text-xs text-muted-foreground">
                    수익원
                  </th>
                  <th className="text-left py-3 font-medium text-xs text-muted-foreground">
                    모델
                  </th>
                  <th className="text-left py-3 font-medium text-xs text-muted-foreground">
                    수혜
                  </th>
                </tr>
              </thead>
              <tbody>
                {revenue.map((r) => (
                  <tr key={r.stream} className="border-b last:border-0">
                    <td className="py-3 font-medium">{r.stream}</td>
                    <td className="py-3 text-muted-foreground">{r.desc}</td>
                    <td className="py-3">
                      <Badge variant="secondary" className="text-[10px]">
                        {r.partner}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-Year Projection */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-12">
          <h2 className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            3-Year Projection
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium text-xs text-muted-foreground">연도</th>
                  <th className="text-right py-3 font-medium text-xs text-muted-foreground">가입자</th>
                  <th className="text-right py-3 font-medium text-xs text-muted-foreground">총 매출</th>
                  <th className="text-right py-3 font-medium text-xs text-muted-foreground">비용</th>
                  <th className="text-right py-3 font-medium text-xs text-muted-foreground">순이익</th>
                  <th className="text-right py-3 font-medium text-xs text-muted-foreground">ROI</th>
                </tr>
              </thead>
              <tbody>
                {projection.map((p) => (
                  <tr key={p.year} className="border-b last:border-0">
                    <td className="py-3 font-semibold">{p.year}</td>
                    <td className="py-3 text-right">{p.users}명</td>
                    <td className="py-3 text-right font-medium">{p.revenue}억</td>
                    <td className="py-3 text-right text-muted-foreground">{p.cost}억</td>
                    <td className="py-3 text-right font-bold text-accent">{p.profit}억</td>
                    <td className="py-3 text-right">
                      <Badge variant="secondary">{p.roi}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2">
                  <td className="py-3 font-bold">3년 누적</td>
                  <td className="py-3 text-right font-bold">80,000명</td>
                  <td className="py-3 text-right font-bold">930억</td>
                  <td className="py-3 text-right font-bold text-muted-foreground">427억</td>
                  <td className="py-3 text-right font-bold text-accent">503억</td>
                  <td className="py-3 text-right">
                    <Badge className="gradient-vita text-white border-0">
                      CAGR 128%
                    </Badge>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Monthly Burn */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h2 className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            Initial Cost (Andrew Direct Build)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-5">
              <h3 className="text-sm font-semibold mb-4">초기 비용</h3>
              <div className="space-y-2">
                {[
                  { item: "법인 설립", cost: "500만원" },
                  { item: "법률/회계", cost: "1,000만원" },
                  { item: "AI 개발도구", cost: "~200만원" },
                ].map((r) => (
                  <div key={r.item} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{r.item}</span>
                    <span className="font-medium">{r.cost}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between text-sm">
                <span className="font-semibold">초기 합계</span>
                <span className="font-bold">~1,700만원</span>
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="text-sm font-semibold mb-4">월 운영비</h3>
              <div className="space-y-2">
                {[
                  { item: "LLM API", cost: "50~200만원" },
                  { item: "서버 임대", cost: "30~100만원" },
                  { item: "AI 개발도구 구독", cost: "~30만원" },
                  { item: "Supabase + Vercel", cost: "~5만원" },
                  { item: "KakaoTalk 알림", cost: "~5만원" },
                  { item: "Toss Payments", cost: "매출 2.5%" },
                ].map((r) => (
                  <div key={r.item} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{r.item}</span>
                    <span className="font-medium">{r.cost}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between text-sm">
                <span className="font-semibold">월 합계</span>
                <span className="font-bold text-accent">120~340만원</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">
                LLM API 비용은 사용자 수에 비례 (1인당 ~500원/월 기준)
              </p>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            외주 개발 시 1.5~2억. 직접 구축 시 초기 ~1,700만원 + 월 운영비로 전환.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-12">
          <h2 className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            Milestones
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-vita flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                    {m.period.slice(-2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-16 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{m.period}</span>
                    <Badge variant="secondary" className="text-[10px]">
                      {m.name}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {m.tasks}
                  </p>
                  <p className="text-xs font-medium text-accent">
                    KPI: {m.kpi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Matrix */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h2 className="text-sm font-medium text-accent mb-6 tracking-wide uppercase">
            Risk Matrix
          </h2>
          <div className="space-y-3">
            {risks.map((r) => (
              <Card key={r.risk} className="p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex items-center gap-2 md:w-1/3">
                    <ShieldAlert className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium">{r.risk}</span>
                  </div>
                  <div className="md:w-1/6">
                    <Badge className={riskColor(r.level) + " text-[10px]"}>
                      {r.level === "high"
                        ? "높음"
                        : r.level === "medium"
                        ? "중간"
                        : "낮음"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground md:w-1/2">
                    {r.mitigation}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-8">
          <Card className="gradient-navy p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Next Step</h2>
            <p className="text-sm text-white/70 mb-6">
              본사 3자 미팅 → API 접근권 확보 → 8주 MVP 구축
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton
                  href="/demo/dashboard"
                  size="lg"
                className="bg-white text-slate-900 hover:bg-white/90">
                  데모 보기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LinkButton>
              <LinkButton
                  href="/proposal"
                  variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10">
                  제안서
                </LinkButton>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
