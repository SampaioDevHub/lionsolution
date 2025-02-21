"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/contexts/language-context"

interface LanguageOption {
  code: Language
  label: string
  flag: string
}

const languages: LanguageOption[] = [
  {
    code: "pt-BR",
    label: "Português",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%20(126)-DJlKzos78ZbsZPp2gHEIHrOv2d15ng.png",
  },
  {
    code: "en-US",
    label: "English",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%20(126)-DJlKzos78ZbsZPp2gHEIHrOv2d15ng.png",
  },
  {
    code: "es-ES",
    label: "Español",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%20(126)-DJlKzos78ZbsZPp2gHEIHrOv2d15ng.png",
  },
]

interface LanguageSelectorProps {
  onLanguageSelect: () => void
}

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const { setLanguage } = useLanguage()

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang)
    onLanguageSelect()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-emerald-800 to-emerald-500">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Bem-vindo à Lion Solution</h1>
          <p className="text-lg text-white/90">Selecione seu idioma:</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {languages.map((lang) => (
            <Card
              key={lang.code}
              className="p-2 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <div className="w-32 space-y-2">
                <div className="relative h-20 w-full border rounded">
                  <Image
                    src={lang.flag || "/placeholder.svg"}
                    alt={`${lang.label} flag`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-gray-700 font-medium">{lang.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

