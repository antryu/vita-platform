"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Building2,
  TrendingUp,
  Users,
  Target,
  ShieldAlert,
  Smartphone,
  Watch,
  Cpu,
  Coins,
  BarChart3,
  Rocket,
  Crown,
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

export default function BusinessPlanPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-muted-foreground">
              <Lock className="w-3 h-3 mr-1" />
              Confidential
            </Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">사업계획서</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground">
            총판 Win-Win 구조 + 디바이스 로드맵 + 3년 로드맵 + 기업가치 시뮬레이션
          </motion.p>
        </div>
      </section>

      {/* PART 6: 총판 Win-Win */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 6. 총판 사업자를 위한 Win-Win 구조</h2>

          {/* Before/After */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-xs text-muted-foreground w-1/2">기존 하드웨어 영업 구조</th>
                  <th className="text-left py-3 text-xs text-accent w-1/2">플랫폼 전환 후 구조</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["이달 영업이 없으면 이달 수입이 없다", "작년에 확보한 1,000명이 이달도 월정액을 낸다"],
                  ["기기 1대 판매 → 관계 종료", "기기 판매 → 구독 연결 → 영구적 관계"],
                  ["총판 수익: 기기 마진 1회", "총판 수익: 기기 마진 + 구독 수수료 매월"],
                ].map(([before, after], i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 text-muted-foreground">{before}</td>
                    <td className="py-3 font-medium text-accent">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Commission Structure */}
          <Card className="p-6 bg-accent/5 border-accent/20 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Coins className="w-5 h-5 text-vita-gold" />
              <h4 className="font-semibold">총판 구독 수수료 구조 제안</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">총판이 확보한 구독자 1인당</span><span className="font-medium">3,000~5,000원/월 지속 배분</span></div>
              <Separator />
              <div className="flex justify-between"><span className="text-muted-foreground">구독자 1,000명 확보 시</span><span className="font-medium text-accent">월 300~500만 원 패시브 인컴</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">구독자 5,000명 확보 시</span><span className="font-bold text-accent">월 1,500~2,500만 원 — 기기 영업 없이도 발생</span></div>
            </div>
          </Card>

          {/* New Sales Pitch */}
          <Card className="p-6 gradient-navy text-white border-0">
            <h4 className="text-sm font-semibold mb-2">새로운 영업 멘트</h4>
            <p className="text-lg font-bold text-vita-gold mb-2">
              &quot;월 14,900짜리 건강 구독 서비스에 가입하시면 반지는 드립니다.&quot;
            </p>
            <p className="text-xs text-white/70">
              소비자 입장에서 14,900이나 199,000이나 완전히 다른 구매 결정.
              &apos;구독 가입 → 반지 무상 제공&apos; 구조만으로 현장 전환율은 최소 3~5배 상승합니다.
            </p>
          </Card>
        </div>
      </section>

      {/* PART 7: 디바이스 로드맵 */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 7. 웨어러블 디바이스 확장 로드맵</h2>
          <h3 className="text-2xl font-bold mb-2">반지는 시작이다</h3>
          <p className="text-sm text-muted-foreground mb-8">
            플랫폼이 구축되면 어떤 웨어러블 디바이스든 이 플랫폼 위에 올릴 수 있습니다.
          </p>

          <div className="space-y-4">
            {[
              {
                phase: "Phase 1",
                period: "현재~2027",
                icon: Smartphone,
                device: "바이탈링 Gen 2 (혈압 추정/혈당 트렌드) / 시니어 실리콘 소재 / 아티스트 에디션 정례화",
                channel: "기존 전 채널",
              },
              {
                phase: "Phase 2",
                period: "2027~2028",
                icon: Watch,
                device: "바이탈 패치 (연속 혈당/체온 모니터링) / 바이탈 워치 (낙상 감지/SOS) / 바이탈 밴드 라이트 (29,000 초저가)",
                channel: "요양원/당뇨 채널 / 독거 노인 / 플랫폼 대량 모수",
              },
              {
                phase: "Phase 3",
                period: "2028~2030",
                icon: Cpu,
                device: "바이탈 플랫폼 오픈 API 공개 — 삼성 워치/애플워치 등 제3자 디바이스도 연동 가능",
                channel: "플랫폼 전체 / API 사용료 수취",
              },
            ].map((item, i) => (
              <motion.div key={item.phase} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <Badge className="gradient-vita text-white border-0 shrink-0">{item.phase}</Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-4 h-4 text-accent" />
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="text-sm mb-1">{item.device}</p>
                      <p className="text-xs text-muted-foreground">타겟: {item.channel}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-accent font-medium mt-6 text-center">
            Phase 3의 오픈 API 전략이 실현되는 순간, 바이탈링은 &apos;링을 만드는 회사&apos;에서
            &apos;대한민국 최대의 헬스 데이터 인프라 기업&apos;으로 완전히 전환됩니다.
          </p>
        </div>
      </section>

      {/* PART 8: 3년 로드맵 */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-12">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 8. 단계별 실행 로드맵</h2>
          <h3 className="text-2xl font-bold mb-8">3년 3단계</h3>

          <div className="space-y-8">
            {[
              {
                stage: "Stage 1",
                period: "2026 하반기",
                title: "플랫폼 씨앗 — '앱이 먼저다'",
                icon: Rocket,
                tasks: ["바이탈 캐시(Vital Cash) 앱 v1.0 출시", "임영웅 팬덤 파일럿: 앰배서더 50명 선발", "보람상조/DB손해보험 제휴 계약 체결", "CHA 비대면 진료 앱 연동 출시", "디바이스 렌탈 모델: 49,000 선납 + 19,900/월"],
                kpis: ["앱 가입자 5,000명", "유료 구독자 3,000명", "MRR 6,000만 달성", "총판 앰배서더 전환율 30% 이상"],
              },
              {
                stage: "Stage 2",
                period: "2027",
                title: "플랫폼 성장 — '모수가 폭발한다'",
                icon: TrendingUp,
                tasks: ["바이탈 몰(Vital Mall) 오픈: 광고/커머스 수익 시작", "임영웅 공식 모델 계약 + 전국 콘서트 체험존 5회", "지자체 B2G 계약 3개 이상 체결", "제약사/병원 광고 집행 첫 계약", "보험사 손해율 인센티브 계약 체결"],
                kpis: ["앱 가입자 30,000명", "유료 구독자 20,000명", "MRR 5억 달성", "광고 월 수익 5,000만 달성"],
              },
              {
                stage: "Stage 3",
                period: "2028",
                title: "플랫폼 성숙 — '기업 가치가 폭발한다'",
                icon: Crown,
                tasks: ["Series A 투자 유치 (프리머니 500억+)", "바이탈 패치/바이탈 워치 신규 디바이스 출시", "오픈 API 베타 출시", "카카오헬스케어/네이버클라우드 M&A 협상 또는 IPO 준비 착수"],
                kpis: ["누적 구독자 100,000명", "연 매출 100억 이상", "플랫폼 밸류에이션 500~1,000억", "총판 사업자 평균 패시브 인컴 월 1,000만 원+"],
              },
            ].map((stage, i) => (
              <motion.div key={stage.stage} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-6 overflow-hidden relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg gradient-vita flex items-center justify-center">
                      <stage.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{stage.stage}</Badge>
                        <span className="text-xs text-muted-foreground">{stage.period}</span>
                      </div>
                      <h4 className="font-semibold text-sm mt-0.5">{stage.title}</h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">실행 과제</p>
                      <div className="space-y-1.5">
                        {stage.tasks.map((task, j) => (
                          <p key={j} className="text-xs text-muted-foreground flex gap-1.5">
                            <span className="text-accent">-</span> {task}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">목표 KPI</p>
                      <div className="space-y-1.5">
                        {stage.kpis.map((kpi, j) => (
                          <p key={j} className="text-xs font-medium flex gap-1.5">
                            <span className="text-accent">-</span> {kpi}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PART 9: 기업가치 시뮬레이션 */}
      <section className="px-6 pb-16 bg-muted/30">
        <div className="mx-auto max-w-4xl py-12">
          <h2 className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">PART 9. 기업 가치 시뮬레이션</h2>
          <h3 className="text-2xl font-bold mb-2">왜 지금이 전환의 적기인가</h3>
          <p className="text-sm text-muted-foreground mb-8">
            같은 매출 규모에서도 사업의 성격이 플랫폼이냐 제조사냐에 따라 기업 가치가 10배 달라집니다.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-xs text-muted-foreground">시나리오</th>
                  <th className="text-right py-3 text-xs text-muted-foreground">2028년 매출</th>
                  <th className="text-right py-3 text-xs text-muted-foreground">적용 배수</th>
                  <th className="text-right py-3 text-xs text-muted-foreground">기업 가치</th>
                  <th className="text-right py-3 text-xs text-muted-foreground">총판 공유 가치</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-muted-foreground">
                  <td className="py-3">현상 유지 (하드웨어 제조사)</td>
                  <td className="py-3 text-right">50억</td>
                  <td className="py-3 text-right">10~15x</td>
                  <td className="py-3 text-right">500~750억</td>
                  <td className="py-3 text-right">소규모</td>
                </tr>
                <tr className="border-b font-medium">
                  <td className="py-3 text-accent">플랫폼 전환 (기본)</td>
                  <td className="py-3 text-right">100억</td>
                  <td className="py-3 text-right">50x</td>
                  <td className="py-3 text-right font-bold text-accent">5,000억</td>
                  <td className="py-3 text-right">대규모</td>
                </tr>
                <tr className="border-b font-bold">
                  <td className="py-3 text-accent">플랫폼 전환 (낙관)</td>
                  <td className="py-3 text-right">150억</td>
                  <td className="py-3 text-right">80x</td>
                  <td className="py-3 text-right text-accent">1조 2,000억</td>
                  <td className="py-3 text-right">압도적</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mb-8">
            * 플랫폼 기업(SaaS/데이터/광고) 밸류에이션 배수 적용. 오우라 기업 가치 $11B(약 15조원), 히로인즈 및 유사 헬스케어 플랫폼 Series A 밸류에이션 300~500억 기준 추산.
          </p>

          {/* Exit Scenarios */}
          <h4 className="text-lg font-semibold mb-4">총판 사업자의 엑싯 시나리오</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { route: "M&A", buyers: "카카오헬스케어 / 네이버클라우드 / 삼성웰스토리 / 대형 제약사", reason: "10만 명+ 시니어 생체 데이터 독점 — 자체 구축 불가한 데이터 자산" },
              { route: "IPO", buyers: "KOSDAQ 또는 코스피 상장", reason: "안정적 MRR 100억+ + 플랫폼 성장성 + 데이터 자산 = 테크 기업 밸류에이션" },
              { route: "Series B+", buyers: "글로벌 헬스케어 펀드 / 국내 대형 VC", reason: "동남아/일본 시니어 시장 글로벌 확장 투자 유치" },
            ].map((item, i) => (
              <motion.div key={item.route} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-5 h-full">
                  <Badge className={`mb-3 ${item.route === "IPO" ? "gradient-vita text-white border-0" : ""}`}>
                    {item.route}
                  </Badge>
                  <p className="text-xs font-medium mb-1">{item.buyers}</p>
                  <p className="text-[10px] text-muted-foreground">{item.reason}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PART 10: 결론 */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl pt-12">
          <Card className="p-8 md:p-12 gradient-navy text-white border-0 text-center">
            <h2 className="text-2xl font-bold mb-6">우리는 지금 두 개의 길 앞에 서 있습니다</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-xs text-white/50 mb-1">첫 번째 길</p>
                <p className="text-sm">지금처럼 반지를 팝니다. 오우라를 파는 사람, 갤럭시를 파는 사람과 같은 땅에서 싸웁니다.</p>
              </div>
              <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                <p className="text-xs text-accent mb-1">두 번째 길</p>
                <p className="text-sm">우리가 플랫폼이 됩니다. 대한민국 시니어의 생체 시간을 관리하는 플랫폼이 되는 순간, 삼성도 오우라도 이 땅에 들어올 수 없습니다.</p>
              </div>
            </div>

            <Separator className="bg-white/20 my-6" />

            <div className="space-y-3 text-sm">
              <p><span className="font-bold">첫째.</span> 기기 판매라는 &apos;점&apos;의 비즈니스에서, 데이터 구독이라는 &apos;면&apos;의 비즈니스로 전환합니다.</p>
              <p><span className="font-bold">둘째.</span> 히로인즈가 걷기로 데이터를 모으는 동안, 우리는 수면/심박/스트레스를 24시간 모읍니다.</p>
              <p><span className="font-bold">셋째.</span> 우리의 최종 목적지는 &apos;대한민국 최대의 실시간 헬스 데이터 허브&apos;입니다.</p>
            </div>

            <Separator className="bg-white/20 my-6" />

            <p className="text-base font-bold leading-relaxed text-vita-gold">
              &quot;우리는 이제 반지를 파는 상인이 아닙니다.
              <br />
              대한민국 국민의 건강한 시간을 관리하는 데이터 플랫폼의 주인이 됩시다.&quot;
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-3">
          <LinkButton href="/proposal" size="lg" className="gradient-vita text-white border-0">
            전환 제안서
            <ArrowRight className="w-4 h-4 ml-2" />
          </LinkButton>
          <LinkButton href="/demo/dashboard" variant="outline" size="lg">
            데모 보기
          </LinkButton>
        </div>
      </section>
    </div>
  );
}
