"use client";

import Link from "next/link";
import {
  Users,
  AlertTriangle,
  CheckCircle2,
  Heart,
  Moon,
  Zap,
  Bell,
  ChevronRight,
  LayoutDashboard,
  List,
  History,
  FileText,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LinkButton } from "@/components/link-button";

const members = [
  { name: "김영수", age: 78, score: 42, status: "critical", hr: 142, spo2: 91, lastSeen: "15분 전", location: "서울 강서구" },
  { name: "박순자", age: 82, score: 38, status: "critical", hr: 58, spo2: 88, lastSeen: "8분 전", location: "화성시 동탄" },
  { name: "이정호", age: 71, score: 61, status: "warning", hr: 78, spo2: 96, lastSeen: "2분 전", location: "서울 마포구" },
  { name: "최미경", age: 75, score: 55, status: "warning", hr: 82, spo2: 95, lastSeen: "5분 전", location: "인천 남동구" },
  { name: "정대식", age: 69, score: 68, status: "warning", hr: 71, spo2: 97, lastSeen: "1분 전", location: "화성시 봉담" },
  { name: "한옥순", age: 80, score: 87, status: "normal", hr: 66, spo2: 98, lastSeen: "3분 전", location: "화성시 동탄" },
  { name: "오병호", age: 74, score: 91, status: "normal", hr: 64, spo2: 98, lastSeen: "1분 전", location: "서울 강서구" },
  { name: "윤정숙", age: 77, score: 84, status: "normal", hr: 70, spo2: 97, lastSeen: "4분 전", location: "화성시 향남" },
];

const alerts = [
  { severity: "critical", name: "김영수", age: 78, message: "심박수 142bpm — 평소 대비 2배 이상", time: "15분 전", action: "보호자 알림 발송 완료" },
  { severity: "critical", name: "박순자", age: 82, message: "SpO2 88% — 산소포화도 위험 수준", time: "8분 전", action: "119 연동 진행 중" },
  { severity: "warning", name: "이정호", age: 71, message: "수면 점수 3일 연속 저하 (82→65→48)", time: "오늘 06:00", action: "AI 코칭 발송" },
  { severity: "warning", name: "최미경", age: 75, message: "스트레스 지수 상승 추세 (5일간)", time: "오늘 07:00", action: "주간 리포트에 포함" },
];

function statusBadge(status: string) {
  if (status === "critical")
    return <Badge className="bg-red-500/10 text-red-600 border-red-200 text-[10px]">위험</Badge>;
  if (status === "warning")
    return <Badge className="bg-amber-500/10 text-amber-600 border-amber-200 text-[10px]">주의</Badge>;
  return <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 text-[10px]">정상</Badge>;
}

export default function DemoDashboard() {
  const normal = members.filter((m) => m.status === "normal").length;
  const warning = members.filter((m) => m.status === "warning").length;
  const critical = members.filter((m) => m.status === "critical").length;

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-5xl">
          <Badge variant="outline" className="mb-4 text-accent border-accent/30">
            Demo Mode — 목업 데이터
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            기관 대시보드
          </h1>
          <p className="text-muted-foreground">
            화성시 통합돌봄센터 — 2026.04.16
          </p>
          <div className="flex gap-3 mt-4">
            <LinkButton href="/demo/guardian" variant="outline" size="sm" className="text-xs">
              보호자 앱 데모
              <ChevronRight className="w-3 h-3 ml-1" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{members.length}</p>
                <p className="text-xs text-muted-foreground">전체 대상자</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div>
                <p className="text-2xl font-bold text-emerald-600">{normal}</p>
                <p className="text-xs text-muted-foreground">정상</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div>
                <p className="text-2xl font-bold text-amber-600">{warning}</p>
                <p className="text-xs text-muted-foreground">주의</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div>
                <p className="text-2xl font-bold text-red-600">{critical}</p>
                <p className="text-xs text-muted-foreground">위험</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Alerts */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-5xl">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h2 className="text-sm font-semibold">실시간 알림</h2>
              <Badge variant="destructive" className="text-[10px] ml-auto">
                {alerts.length}건
              </Badge>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg border ${
                    alert.severity === "critical"
                      ? "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900"
                      : "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        alert.severity === "critical"
                          ? "bg-red-500 animate-pulse"
                          : "bg-amber-500"
                      }`}
                    />
                    <span className="text-sm font-medium">
                      {alert.name} ({alert.age}세)
                    </span>
                    <span className="text-[10px] text-muted-foreground ml-auto">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-4">
                    {alert.message}
                  </p>
                  <div className="flex items-center gap-1 ml-4 mt-1.5">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span className="text-[10px] text-accent font-medium">
                      {alert.action}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Weekly Stats */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Moon className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold">수면 현황</h3>
            </div>
            <p className="text-2xl font-bold mb-1">6.2h</p>
            <p className="text-xs text-muted-foreground mb-4">
              평균 수면시간 (전주 대비 -0.3h)
            </p>
            <div className="space-y-2">
              {members.slice(0, 4).map((m, i) => (
                <div key={m.name} className="flex items-center gap-2">
                  <span className="text-[10px] w-12 truncate">{m.name}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-indigo-400"
                      style={{ width: `${50 + i * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold">스트레스</h3>
            </div>
            <p className="text-2xl font-bold mb-1">42점</p>
            <p className="text-xs text-muted-foreground mb-4">
              평균 스트레스 (전주 대비 +5점)
            </p>
            <div className="space-y-2">
              {members.slice(0, 4).map((m, i) => (
                <div key={m.name} className="flex items-center gap-2">
                  <span className="text-[10px] w-12 truncate">{m.name}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${30 + i * 15}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold">VITA Score 추이</h3>
            </div>
            <p className="text-2xl font-bold mb-1">74점</p>
            <p className="text-xs text-muted-foreground mb-4">
              전체 평균 (전주 대비 -2점)
            </p>
            <div className="flex items-end gap-1 h-16">
              {[68, 72, 75, 78, 76, 74, 74].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 gradient-vita rounded-t"
                  style={{ height: `${(v / 100) * 100}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] text-muted-foreground mt-1">
              <span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span><span>일</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Member List */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">대상자 현황</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2 font-medium">이름</th>
                    <th className="text-left py-2 font-medium">나이</th>
                    <th className="text-left py-2 font-medium">VITA Score</th>
                    <th className="text-left py-2 font-medium">심박</th>
                    <th className="text-left py-2 font-medium">SpO2</th>
                    <th className="text-left py-2 font-medium">상태</th>
                    <th className="text-left py-2 font-medium">위치</th>
                    <th className="text-right py-2 font-medium">측정</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr
                      key={m.name}
                      className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-2.5 font-medium">{m.name}</td>
                      <td className="py-2.5 text-muted-foreground">{m.age}세</td>
                      <td className="py-2.5">
                        <span
                          className={`font-bold ${
                            m.score < 50
                              ? "text-red-600"
                              : m.score < 70
                              ? "text-amber-600"
                              : "text-emerald-600"
                          }`}
                        >
                          {m.score}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span className={m.hr > 100 ? "text-red-600 font-medium" : ""}>
                          {m.hr}bpm
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span className={m.spo2 < 92 ? "text-red-600 font-medium" : ""}>
                          {m.spo2}%
                        </span>
                      </td>
                      <td className="py-2.5">{statusBadge(m.status)}</td>
                      <td className="py-2.5 text-xs text-muted-foreground">{m.location}</td>
                      <td className="py-2.5 text-right text-xs text-muted-foreground">{m.lastSeen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
