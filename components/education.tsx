import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      title: "Advanced Diploma in Interior Designing & Space Management",
      institution: "Lt. Bhausaheb Hiray College of Architecture & Interior Designing",
      location: "Bandra (E), Mumbai",
      period: "2006-2008",
      description:
        "Comprehensive two-year program covering interior design principles, space planning, and project management.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Set Designing Certification",
      institution: "Lt. Bhausaheb Hiray College of Architecture & Interior Designing",
      location: "Bandra (E), Mumbai",
      period: "2007-2008",
      description: "Specialized training in set design for film, television, and theatrical productions.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ]

  const professionalExperience = [
    "Lead the design and execution of various interior design projects including office spaces and hospitality environments",
    "Develop detailed design concepts, floor plans, and 3D renderings to present to clients and stakeholders",
    "Coordinate with architects, contractors, and suppliers to ensure the seamless implementation of design plans",
    "Oversee material selection, FF&E procurement, and budget management to align with client requirements",
    "Ensure all designs adhere to building codes, accessibility standards, and sustainable practices",
    "Managed a team of junior designers, providing mentorship and overseeing project progress",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education & Expertise</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Academic foundation and professional development in interior design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Academic Qualifications</h3>
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 p-6 flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">{edu.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold">{edu.title}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location} • {edu.period}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Experience Summary */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Professional Expertise</h3>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4">Core Competencies</h4>
                  <ul className="space-y-3">
                    {professionalExperience.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
