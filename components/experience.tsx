import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Associate Designer",
      company: "The Canvas",
      period: "Apr 2019 - Present",
      location: "Mumbai, India",
      achievements: [
        "Led design and execution of large-scale commercial projects including Table space, Pune (1 lac Sq.ft)",
        "Managed high-profile projects for Framestore, Mumbai (60,000 Sq.ft) and Anand Rathi, Mumbai (60,000 Sq.ft)",
        "Delivered complex projects for major corporations including E&Y across multiple cities (Mumbai, Pune, Bangalore, Chennai)",
        "Successfully completed projects for Allianz, Trivandrum (5 lac Sq.ft) - one of the largest projects handled",
        "Coordinated with international teams for Hitachi Energy projects across Chennai and Mumbai",
      ],
    },
    {
      title: "Senior Designer",
      company: "JTCPL Designs",
      period: "Feb 2016 - Mar 2019",
      location: "Mumbai, India",
      achievements: [
        "Managed large-scale commercial projects including Deutsche Bank offices in Pune (1,80,000 Sq.ft) and Bangalore (4,50,000 Sq.ft)",
        "Led design team for KBS Creations – MIDC, Mumbai (60,000 Sq.ft)",
        "Successfully delivered projects for premium locations including One BKC, Mumbai",
        "Coordinated with international standards for Deutsche Bank projects",
        "Managed co-working space projects for Regus and Spaces, Mumbai",
      ],
    },
    {
      title: "Interior Designer",
      company: "Concept Architectural Services Pvt. Ltd",
      period: "Dec 2013 - Jan 2016",
      location: "Mumbai, India",
      achievements: [
        "Delivered high-profile commercial projects for global corporations including Apple (Mumbai & Gurgaon)",
        "Managed large-scale projects for UPL, Mumbai (80,000 Sq.ft) and Yash Technologies, Mumbai (80,000 Sq.ft)",
        "Successfully completed projects for financial institutions including ICICI and Citi Bank",
        "Coordinated multi-city projects across Mumbai, Chennai, Pune, and Noida",
        "Ensured compliance with international corporate standards and guidelines",
      ],
    },
    {
      title: "Interior Designer",
      company: "ZZ Architects",
      period: "Nov 2013 - Sep 2013",
      location: "Mumbai, India",
      achievements: [
        "Specialized in high-end residential projects in premium Mumbai locations",
        "Worked on luxury residential projects including Kalptaru and Ekta Oculus World at Chembur",
        "Delivered customized design solutions for upscale apartment complexes",
        "Coordinated with real estate developers for multiple residential units",
      ],
    },
    {
      title: "Senior Designer",
      company: "D.P Associates",
      period: "Jan 2012 - Nov 2013",
      location: "Mumbai, India",
      achievements: [
        "Led hospitality projects including Quesso Restaurant, Goregaon (7,500 Sq.ft) and The Lounge, Powai (7,500 Sq.ft)",
        "Managed diverse projects from luxury bungalows in Lonavala to commercial offices",
        "Successfully delivered APMC Office, Navi Mumbai (8,500 Sq.ft) and Saraswat Bank, Navi Mumbai (5,500 Sq.ft)",
        "Coordinated educational projects including Gurukul School, Pune",
        "Managed healthcare facility design for Neway Health Centre, Navi Mumbai (10,500 Sq.ft)",
      ],
    },
    {
      title: "Interior Designer",
      company: "ANA Designs Pvt. Ltd",
      period: "Jul 2011 - Dec 2012",
      location: "Mumbai, India",
      achievements: [
        "Managed large-scale corporate projects including Tata Consultants Pvt. Ltd (70,500 Sq.ft)",
        "Successfully delivered India Bulls project, Mumbai (50,000 Sq.ft)",
        "Coordinated with major corporations for office space design and implementation",
        "Ensured timely delivery of projects within budget constraints",
      ],
    },
    {
      title: "Interior Designer",
      company: "Bobby Mukharji and Associates",
      period: "Jul 2008 - Jun 2011",
      location: "Mumbai, India",
      achievements: [
        "Worked on prestigious hospitality projects for THE LALIT HOTEL chain across multiple cities",
        "Managed projects in New Delhi, Ahmedabad, Mumbai, and Chandigarh for THE LALIT HOTEL",
        "Delivered large-scale hospitality project for Bawa Internationals Hotel, Mumbai (20,000 Sq.ft)",
        "Gained expertise in luxury hospitality design standards and implementation",
      ],
    },
    {
      title: "Interior Designer",
      company: "Design Tec and Associates",
      period: "May 2008 - Jul 2008",
      location: "Mumbai, India",
      achievements: [
        "Started professional career with commercial and residential projects",
        "Delivered commercial projects for Global Square Pvt. Ltd (8,500 Sq.ft) and Geo Chem Pvt. Ltd (7,500 Sq.ft)",
        "Completed residential projects for private clients in Parel and Grand Road, Mumbai",
        "Gained foundational experience in project coordination and client management",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              16+ years of professional journey in interior design
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
