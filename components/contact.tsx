import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "tayade.aakanksha@gmail.com",
      link: "mailto:tayade.aakanksha@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 99202 69445",
      link: "tel:+919920269445",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your space? Let's discuss your interior design project and bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <form
                      action="https://formspree.io/f/mblovjeb"
                      method="POST"
                      encType="multipart/form-data"
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" name="email" type="email" placeholder="Your email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="project-type" className="text-sm font-medium">
                            Project Type
                          </label>
                          <Input id="project-type" name="project-type" placeholder="Residential/Commercial/Office" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" name="subject" placeholder="Project inquiry" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Project Details
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project requirements, space details, timeline, and budget"
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Project Inquiry
                      </Button>
                      <noscript>
                        <p className="text-sm text-center text-muted-foreground mt-2">
                          Please enable JavaScript to use the form, or email me directly.
                        </p>
                      </noscript>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-medium">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            target={info.title === "Address" ? "_blank" : undefined}
                            rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Connect with me</h3>
                    <p className="text-sm text-muted-foreground mb-4">Follow my work and get design inspiration</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://instagram.com/aakankshatayade" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Instagram</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="mailto:tayade.aakanksha@gmail.com">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="tel:+919920269445">
                          <Phone className="h-5 w-5" />
                          <span className="sr-only">Phone</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Services Offered</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Residential Interior Design</p>
                      <p>• Commercial Space Planning</p>
                      <p>• Office Interior Design</p>
                      <p>• Hospitality Design</p>
                      <p>• Space Planning & Consultation</p>
                      <p>• 3D Visualization & Rendering</p>
                      <p>• Project Management</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
