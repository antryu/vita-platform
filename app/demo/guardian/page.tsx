"use client";

import Link from "next/link";
import {
  Heart,
  Wind,
  Moon,
  Zap,
  MapPin,
  Battery,
  Clock,
  Home,
  FileText,
  AlertTriangle,
  Settings,
  ArrowLeft,
  Thermometer,
  Brain,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function GuardianDemo() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center px-6">
      {/* Phone Frame */}
      <div className="w-full max-w-[375px]">

        <div className="bg-card rounded-[2rem] shadow-2xl border overflow-hidden">
          {/* Notch */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-28 h-5 bg-foreground rounded-full" />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-1 text-[10px] text-muted-foreground">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <Battery className="w-3.5 h-3.5" />
              <span>72%</span>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 pb-6 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-11 h-11 rounded-full gradient-navy flex items-center justify-center text-white text-sm font-bold">
                JH
              </div>
              <div>
                <h1 className="text-base font-bold">아버지</h1>
                <p className="text-xs text-muted-foreground">
                  이정호, 72세
                </p>
              </div>
              <Badge className="ml-auto bg-emerald-500/10 text-emerald-600 border-emerald-200 text-[10px]">
                양호
              </Badge>
            </div>

            {/* VITA Score */}
            <Card className="p-5 text-center">
              <p className="text-xs text-muted-foreground mb-2">VITA Score</p>
              <div className="relative w-28 h-28 mx-auto mb-2">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="currentColor"
                    className="text-muted"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${87 * 2.64} ${264 - 87 * 2.64}`}
                  />
                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">87</span>
                </div>
              </div>
              <p className="text-xs text-emerald-600 font-medium">
                전일 대비 +3점
              </p>
            </Card>

            {/* Vitals Grid */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Heart className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-[10px] text-muted-foreground">
                    심박수
                  </span>
                </div>
                <p className="text-lg font-bold">68</p>
                <p className="text-[10px] text-muted-foreground">bpm</p>
              </Card>
              <Card className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Wind className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[10px] text-muted-foreground">
                    산소포화도
                  </span>
                </div>
                <p className="text-lg font-bold">97</p>
                <p className="text-[10px] text-muted-foreground">%</p>
              </Card>
              <Card className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="text-[10px] text-muted-foreground">
                    수면
                  </span>
                </div>
                <p className="text-lg font-bold">6h 42m</p>
                <p className="text-[10px] text-muted-foreground">
                  깊은 잠 28%
                </p>
              </Card>
              <Card className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[10px] text-muted-foreground">
                    스트레스
                  </span>
                </div>
                <p className="text-lg font-bold">낮음</p>
                <p className="text-[10px] text-muted-foreground">32점</p>
              </Card>
            </div>

            {/* Location & Battery */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>서울 강서구 마곡동</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>3분 전</span>
              </div>
            </div>

            {/* AI Coaching */}
            <Card className="p-4 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-1.5 mb-2">
                <Brain className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-accent">
                  AI 코칭
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                어제 수면 중 깊은 잠 비율이 평소보다 낮았습니다. 취침 전 가벼운
                스트레칭을 권합니다. 오늘 스트레스 회복도는 양호합니다.
              </p>
            </Card>

            {/* Bottom Nav */}
            <div className="flex justify-around pt-3 border-t">
              {[
                { icon: Home, label: "홈", active: true },
                { icon: FileText, label: "리포트", active: false },
                { icon: AlertTriangle, label: "긴급", active: false },
                { icon: Settings, label: "설정", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center gap-0.5 ${
                    item.active ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[9px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-28 h-1 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
