import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Hotel, Briefcase } from "lucide-react"

export default function Projects() {
  const featuredProjects = [
    {
      title: "Deutsche Bank - Cyber City, Pune",
      description:
        "Large-scale commercial office design for Deutsche Bank's Pune operations, featuring modern workspace solutions and collaborative areas.",
      area: "1,80,000 Sq.ft",
      type: "Commercial",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      company: "JTCPL Designs",
      year: "2016-2019",
    },
    {
      title: "Deutsche Bank - Velankani Tech Park, Bangalore",
      description:
        "Comprehensive interior design for Deutsche Bank's Bangalore facility, incorporating cutting-edge technology and sustainable design principles.",
      area: "4,50,000 Sq.ft",
      type: "Commercial",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      company: "JTCPL Designs",
      year: "2016-2019",
    },
    {
      title: "Allianz, Trivandrum",
      description:
        "Massive commercial project for Allianz insurance company, featuring state-of-the-art office spaces and customer service areas.",
      area: "5,00,000 Sq.ft",
      type: "Commercial",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      company: "The Canvas",
      year: "2019-Present",
    },
    {
      title: "THE LALIT HOTEL Chain",
      description:
        "Luxury hospitality design for THE LALIT HOTEL properties across multiple cities including New Delhi, Mumbai, Ahmedabad, and Chandigarh.",
      area: "Multiple Locations",
      type: "Hospitality",
      icon: <Hotel className="h-8 w-8 text-primary" />,
      company: "Bobby Mukharji and Associates",
      year: "2008-2011",
    },
    {
      title: "Apple Stores - Mumbai & Gurgaon",
      description:
        "Premium retail space design for Apple stores, incorporating brand guidelines and creating exceptional customer experiences.",
      area: "12,000 Sq.ft each",
      type: "Retail",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      company: "Concept Architectural Services",
      year: "2013-2016",
    },
    {
      title: "UPL Corporate Office, Mumbai",
      description:
        "Corporate headquarters design for UPL, featuring executive offices, conference facilities, and employee amenities.",
      area: "80,000 Sq.ft",
      type: "Commercial",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      company: "Concept Architectural Services",
      year: "2013-2016",
    },
  ]

  const projectStats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Years of Experience", value: "16+" },
    { label: "Total Area Designed", value: "20+ Lac Sq.ft" },
    { label: "Cities Covered", value: "15+" },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of major commercial, residential, and hospitality projects
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {projectStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Area:</span>
                      <span className="font-medium">{project.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">{project.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{project.company}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="#contact">Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
