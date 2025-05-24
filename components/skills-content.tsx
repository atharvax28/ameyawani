import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const hardSkills = [
    { name: "AutoCAD", level: "Expert", percentage: 95 },
    { name: "Technical Drawings", level: "Expert", percentage: 95 },
    { name: "PowerPoint Presentation", level: "Expert", percentage: 90 },
    { name: "Photoshop", level: "Advanced", percentage: 85 },
    { name: "Revit", level: "Advanced", percentage: 80 },
  ]

  const softSkills = [
    { name: "Communication", level: "Expert", percentage: 95 },
    { name: "Coordination", level: "Expert", percentage: 95 },
    { name: "Listening", level: "Expert", percentage: 90 },
    { name: "Creativity", level: "Expert", percentage: 95 },
    { name: "Leadership", level: "Advanced", percentage: 85 },
  ]

  const coreSkills = [
    "Space Planning and Concept Development",
    "CAD Software (AutoCAD, Revit, etc.)",
    "Design Documentation",
    "Material Selection & Specification",
    "Color Theory and Lighting Design",
    "Budgeting & Cost Estimation",
    "Vendor and Contractor Coordination",
    "FF&E (Furniture, Fixtures & Equipment) Selection",
  ]

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500"
      case "Advanced":
        return "bg-blue-500"
      case "Intermediate":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills & Expertise</h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          Technical proficiencies and core competencies in interior design
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Core Skills */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <h4 className="text-lg font-bold mb-4">Core Competencies</h4>
            <div className="space-y-2">
              {coreSkills.map((skill, i) => (
                <div key={i} className="flex items-center">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hard Skills */}
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-bold mb-4">Technical Skills</h4>
            <div className="space-y-4">
              {hardSkills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-bold mb-4">Professional Skills</h4>
            <div className="space-y-4">
              {softSkills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
