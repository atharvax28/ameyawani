import { Card, CardContent } from "@/components/ui/card"
import { Palette, Building2, Users, Award } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Design Excellence",
      description:
        "Expert in conceptualizing and implementing design solutions that meet aesthetic and functional needs",
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Diverse Projects",
      description: "Extensive experience in residential, commercial, and office space design across various scales",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Leadership",
      description: "Proven ability to manage teams of junior designers and coordinate with stakeholders",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Project Management",
      description: "Strong expertise in managing projects from conception to completion within budget and timelines",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A skilled and passionate Senior Associate Interior Designer with over 16 years of experience in
                designing residential, commercial, and office spaces.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Proficient in conceptualizing and implementing design solutions that meet the client's aesthetic and
                functional needs while ensuring adherence to budget and timelines. Strong expertise in managing projects
                from conception to completion, collaborating with architects, contractors, and stakeholders to deliver
                exceptional interior spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
