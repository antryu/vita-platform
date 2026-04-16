"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Shield,
  Smartphone,
  Database,
  Award,
  Building2,
  Stethoscope,
  Clock,
  Target,
  CheckCircle2,
  BarChart3,
  Zap,
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

export default function ProposalPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <Badge variant="outline" className="text-accent border-accent/30">
              사업구조 전환 제안서
            </Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            반지를 파는 회사에서
            <br />
            <span className="text-gradient">생체 에너지를 자산화하는 플랫폼</span>으로
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground">
            App-First, Ring-Second — 웨어러블 헬스 플랫폼 전환 전략
          </motion.p>
        </div>
      </section>

      {/* The Question */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <Card className="p-8 md:p-10 gradient-navy text-white border-0">
            <h2 className="text-lg font-bold mb-4">이 제안서를 읽기 전에 — 단 하나의 질문</h2>
            <p className="text-base leading-relaxed mb-4">
              애플은 아이폰을 파는 회사인가, 앱스토어를 운영하는 회사인가?
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              애플의 하드웨어 마진은 약 40%. 그러나 앱스토어/구독 서비스의 영업이익률은 70%를 넘습니다.
              나이키는 신발을 파는 회사입니다. 하지만 Nike Run Club 앱에는 5,000만 명이 활동하며, 이 앱이 신발을 팝니다.
            </p>
            <Separator className="bg-white/20 my-4" />
            <p className="text-sm font-medium text-vita-gold">
              바이탈링도 지금 이 선택의 기로에 있습니다.
              <br />
              &quot;반지를 파는 회사&quot;로 남을 것인가, &quot;대한민국 시니어의 생체 시간을 관리하는 플랫폼&quot;이 될 것인가.
            </p>
          </Card>
        </div>
      </section>

      {/* PART 1: 현황 진단 */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">
            PART 1. 현황 진단
          </motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-8">
            하드웨어 사업의 구조적 3대 한계
          </motion.h3>
          <div className="space-y-4">
            {[
              {
                icon: AlertTriangle,
                title: "경쟁의 천장",
                problem: "오우라/삼성/갤럭시링/RingConn과 스펙 경쟁",
                why: "스펙 경쟁 = 자본력의 싸움. 삼성의 연 R&D 예산은 30조 원. 우리가 이길 수 없는 전장입니다.",
              },
              {
                icon: TrendingUp,
                title: "마진의 천장",
                problem: "디바이스 1대 공헌이익 약 98,000원으로 상한 고정",
                why: "아무리 많이 팔아도 '몇 대를 팔았나'가 성장의 전부. 영업 속도에 물리적 한계.",
              },
              {
                icon: BarChart3,
                title: "가치의 천장",
                problem: "하드웨어 제조사 PER 멀티플 10~15배 적용",
                why: "연 매출 50억이어도 기업 가치 500~750억 상한. 플랫폼 기업이면 동일 매출에 50배 = 2,500억.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground mb-1">{item.problem}</p>
                      <p className="text-xs text-muted-foreground">{item.why}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 우리가 이미 가진 것 */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h3 className="text-xl font-bold mb-6">우리가 이미 가진 것 — 지금 당장 쓸 수 있는 무기들</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { asset: "누적 생체 데이터", detail: "실사용자 10,135명 / 8,500만 건 이상의 24시간 생체 데이터" },
              { asset: "임상 레퍼런스", detail: "서울대병원/세브란스 IRB 임상 완료, 심박 ±2bpm 정확도" },
              { asset: "지자체 실증", detail: "광주서구/제천시/화성시 현장 검증 — 고독사 예방 실효성 입증" },
              { asset: "CHA 헬스케어", detail: "차병원그룹 협업 채널 — 의료 신뢰도 담보" },
              { asset: "경쟁 공백 기간", detail: "오우라 ITC 특허 소송으로 RingConn/삼성 갤럭시링 출시 지연 — 골든 타임" },
              { asset: "총판 네트워크", detail: "전국 독점계약 총판 파트너 — 플랫폼 보급의 가장 강력한 오프라인 지상군" },
            ].map((item) => (
              <Card key={item.asset} className="p-4">
                <p className="text-sm font-semibold mb-1">{item.asset}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </Card>
            ))}
          </div>
          <p className="text-sm text-accent font-medium mt-6 text-center">
            결론: 우리는 이미 총을 가지고 있습니다. 지금 필요한 것은 총알이 아니라 더 좋은 전장(플랫폼)입니다.
          </p>
        </div>
      </section>

      {/* PART 2: 핵심 전략 */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-12">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 2. 핵심 전략</h2>
          <h3 className="text-2xl font-bold mb-8">App-First, Ring-Second</h3>

          {/* Before/After */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium text-xs text-muted-foreground w-1/3">기존 정의</th>
                  <th className="text-left py-3 font-medium text-xs text-accent w-2/3">새로운 정의</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["정밀 생체 측정 스마트링 제조/판매", "생체 에너지를 자산화하는 헬스 데이터 플랫폼"],
                  ["반지가 주인공", "앱이 주인공, 반지는 측정 도구"],
                  ["판매가 끝이다", "판매는 시작이다"],
                  ["고객이 우리에게 돈을 낸다", "고객이 건강해지면 우리가 돈을 준다"],
                  ["하드웨어 마진 40% 상한", "플랫폼/데이터 마진 70%+ 무상한"],
                  ["기업 가치 배수 10~15x", "기업 가치 배수 50~100x"],
                ].map(([before, after], i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 text-muted-foreground">{before}</td>
                    <td className="py-3 font-medium text-accent">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 핵심 명제 */}
          <Card className="p-6 bg-accent/5 border-accent/20 mb-10">
            <p className="text-sm font-medium leading-relaxed">
              &quot;반지는 고객의 손가락에 입성하기 위한 티켓일 뿐,
              <br />
              진짜 수익은 그들이 매일 사용하는 앱(플랫폼)에서 나온다.&quot;
            </p>
          </Card>

          {/* 글로벌 벤치마크 */}
          <h4 className="text-lg font-semibold mb-4">글로벌 맥락 — 이미 검증된 경로</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-xs text-muted-foreground">기업</th>
                  <th className="text-left py-2 text-xs text-muted-foreground">전환</th>
                  <th className="text-left py-2 text-xs text-muted-foreground">결과</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["애플", "아이폰 → 앱스토어/구독 서비스", "서비스 매출 비중 22%, 이익 기여 40%. 시총 3,000조 원."],
                  ["나이키", "신발 → Nike Run Club 앱 5천만 명", "앱이 신발을 파는 구조. 디지털 사업부 영업이익률 40%+."],
                  ["넷플릭스", "DVD 대여 → 구독 스트리밍 플랫폼", "동일한 콘텐츠를 '구독'으로 팔자 기업 가치 100배 증가."],
                  ["오우라(Oura)", "링 → 구독 앱 플랫폼", "링 가격 인하 후 구독 $5.99/월 → 플랫폼 기업으로 재평가. 기업가치 $11B."],
                  ["히로인즈", "운동 인증 앱 → 커뮤니티+데이터 플랫폼", "4060 여성 건강 데이터 독점으로 M&A/투자 유치 준비 중."],
                ].map(([company, transition, result], i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2.5 font-medium">{company}</td>
                    <td className="py-2.5 text-muted-foreground">{transition}</td>
                    <td className="py-2.5 text-xs">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <Card className="gradient-navy p-10 text-center text-white">
            <h2 className="text-xl font-bold mb-2">다음 단계: 플랫폼 설계</h2>
            <p className="text-sm text-white/70 mb-6">
              바이탈 캐시, 7개 수익원, 4대 채널 전략을 확인하세요
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LinkButton href="/platform" size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                플랫폼 설계 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </LinkButton>
              <LinkButton href="/business-plan" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                사업계획서
              </LinkButton>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
