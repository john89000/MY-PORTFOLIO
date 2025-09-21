"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, ExternalLink, Mail, ChevronUp, Moon, Sun, Linkedin } from "lucide-react"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:johnoito0@gmail.com?subject=${encodeURIComponent(subject || "Contact from Portfolio")}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`

    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
          required
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
          required
        />
      </div>
      <div>
        <Input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-white text-teal-700 hover:bg-teal-50">
        Send Message
      </Button>
    </form>
  )
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <header className="bg-teal-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">JOHN OITO</h1>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-teal-200 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-teal-200 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-teal-200 transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-teal-200 transition-colors">
                Projects
              </a>
              <a href="#education" className="hover:text-teal-200 transition-colors">
                Education
              </a>
              <a href="#contact" className="hover:text-teal-200 transition-colors">
                Contact
              </a>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="text-white hover:bg-teal-600">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section min-h-screen text-white py-20 relative overflow-hidden flex items-center"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-2 h-2 bg-teal-300 rounded-full animate-float"
            style={{ top: "20%", left: "10%", animationDelay: "0s" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float"
            style={{ top: "30%", left: "80%", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-3 h-3 bg-teal-200 rounded-full animate-float"
            style={{ top: "60%", left: "15%", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-teal-300 rounded-full animate-float"
            style={{ top: "70%", left: "85%", animationDelay: "3s" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float"
            style={{ top: "40%", left: "60%", animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-6 rounded-full border-8 border-teal-400 overflow-hidden shadow-2xl animate-pulse-slow">
              <img
                src="/professional-software-engineer-avatar-with-glasses.jpg"
                alt="John Oito Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance animate-fade-in-up text-white drop-shadow-lg tracking-wider">
            JOHN OITO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in-up animation-delay-200 drop-shadow-md">
            Software Developer & Tech Innovator
          </p>

          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-400">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-teal-200 hover:bg-white/10 rounded-full w-12 h-12"
              onClick={() => window.open("https://github.com/john89000", "_blank")}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-teal-200 hover:bg-white/10 rounded-full w-12 h-12"
              onClick={() => window.open("https://www.linkedin.com/in/john-oito/", "_blank")}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-teal-200 hover:bg-white/10 rounded-full w-12 h-12"
              onClick={() => (window.location.href = "mailto:johnoito0@gmail.com")}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up text-white drop-shadow-lg">
              ABOUT ME
            </h2>
            <div className="w-24 h-1 bg-teal-300 mx-auto animate-fade-in-up animation-delay-200"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-lg leading-relaxed mb-8 text-teal-100">
                Hi there! I'm John Oito, a passionate software developer with a love for crafting innovative digital
                solutions. I enjoy problem-solving and have a keen eye for detail. When I'm not coding, you can find me
                exploring new technologies, contributing to open-source projects, or curled up with a good tech book.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-teal-100">
                My journey in software development has been driven by curiosity and a desire to create meaningful
                applications that solve real-world problems. I specialize in full-stack development and have experience
                with modern frameworks and technologies.
              </p>
              <Button
                className="bg-transparent border-2 border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-teal-900 px-8 py-3 text-lg"
                onClick={() =>
                  (window.location.href =
                    "mailto:johnoito0@gmail.com?subject=Hire John Oito&body=Hi John, I would like to discuss a potential opportunity with you.")
                }
              >
                Hire Me
              </Button>
            </div>

            <div className="flex justify-center animate-fade-in-up animation-delay-600">
              <div className="relative">
                <div className="w-80 h-96 bg-white/10 rounded-lg transform rotate-3 shadow-2xl overflow-hidden">
                  <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full"></div>
                  <img src="/john-oito-professional.jpg" alt="John Oito" className="w-full h-full object-cover mt-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="w-12 h-12 mx-auto rounded-full border-2 border-teal-300 flex items-center justify-center animate-bounce">
              <ChevronUp className="h-5 w-5 text-teal-300 transform rotate-180" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up text-white drop-shadow-lg">SKILLS</h2>
            <div className="w-24 h-1 bg-teal-300 mx-auto animate-fade-in-up animation-delay-200"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Technical Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-teal-600 flex items-center justify-center shadow-2xl">
                  <div className="text-4xl text-white">👥</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Frontend Development</h3>
                <p className="text-teal-200">React, JavaScript, HTML, CSS, Tailwind CSS</p>
              </div>

              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-teal-600 flex items-center justify-center shadow-2xl">
                  <div className="text-4xl text-white">⚙️</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Backend Development</h3>
                <p className="text-teal-200">Python, Django, Node.js, Database Management</p>
              </div>

              <div className="text-center animate-fade-in-up animation-delay-800">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-teal-600 flex items-center justify-center shadow-2xl">
                  <div className="text-4xl text-white">💻</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Full-Stack</h3>
                <p className="text-teal-200">End-to-end application development and deployment</p>
              </div>

              <div className="text-center animate-fade-in-up animation-delay-1000">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-teal-600 flex items-center justify-center shadow-2xl">
                  <div className="text-4xl text-white">🔧</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tools & Technologies</h3>
                <p className="text-teal-200">Git, GitHub, VS Code, Database Design</p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8 text-white animate-fade-in-up animation-delay-1200">
                Core Competencies
              </h3>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-1400">
                <Badge className="bg-teal-600 text-white px-4 py-2 text-lg">Problem Solving</Badge>
                <Badge className="bg-teal-600 text-white px-4 py-2 text-lg">Team Collaboration</Badge>
                <Badge className="bg-teal-600 text-white px-4 py-2 text-lg">Communication</Badge>
                <Badge className="bg-teal-600 text-white px-4 py-2 text-lg">Critical Thinking</Badge>
                <Badge className="bg-teal-600 text-white px-4 py-2 text-lg">Adaptability</Badge>
                <Badge className="bg-teal-600 text-white px-4 py-2 text-lg">Innovation</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">Projects</h2>
          <p className="text-center text-teal-200 mb-12 text-lg animate-fade-in-up animation-delay-200">
             Software Development Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/10 border-teal-400/30 animate-fade-in-up animation-delay-400">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">AI-Powered Mental Health Assistant</h3>
                <p className="text-teal-100 mb-4 text-pretty">
                  Built with AI to support students' mental health and wellbeing through intelligent conversations and
                  resources.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Healthcare
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://github.com/johnoito", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/10 border-teal-400/30 animate-fade-in-up animation-delay-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Interactive Portfolio Website</h3>
                <p className="text-teal-100 mb-4 text-pretty">
                  GitHub-hosted project showcasing web development skills with modern design and responsive layout.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    CSS
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://github.com/john89000/Portfolio", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://wanjiku-oito-portfolio.vercel.app/", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/10 border-teal-400/30 animate-fade-in-up animation-delay-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">OFA Clothing Store</h3>
                <p className="text-teal-100 mb-4 text-pretty">
                  E-commerce platform for fashion retail with inventory management, shopping cart, and secure payment
                  processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    E-commerce
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Fashion
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Full-stack
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://github.com/john89000/OUT-OF-AFRICA-ar", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://v0-ofa-landing-page.vercel.app/", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/10 border-teal-400/30 animate-fade-in-up animation-delay-1000">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Repair & Reuse Marketplace</h3>
                <p className="text-teal-100 mb-4 text-pretty">
                  Sustainability-focused platform connecting users for repair services and reusable goods trading.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Full-stack
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Database
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Sustainability
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://github.com/johnoito", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/10 border-teal-400/30 animate-fade-in-up animation-delay-1200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Explore World – Travel Website</h3>
                <p className="text-teal-100 mb-4 text-pretty">
                  Travel website with responsive design, image slider, service showcase, and contact form validation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Travel
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Payment
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-200">
                    Customer Support
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://github.com/john89000/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                    onClick={() => window.open("https://explore-world-travel.netlify.app/", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up text-white drop-shadow-lg">
              EDUCATION
            </h2>
            <div className="w-24 h-1 bg-teal-300 mx-auto animate-fade-in-up animation-delay-200"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education Entry 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-fade-in-up animation-delay-400">
              <div className="text-center md:text-right">
                <p className="text-lg font-semibold text-white">2025 May - Present</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-lg">Bachelor's in Software Engineering at USIU</p>
              </div>
              <div className="text-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                  onClick={() => window.open("#", "_blank")}
                >
                  View
                </Button>
              </div>
            </div>

            {/* Education Entry 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-fade-in-up animation-delay-600">
              <div className="text-center md:text-right">
                <p className="text-lg font-semibold text-white">2025 July - Present</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-lg">Software Development Course at Power Learn Project(PLP)</p>
              </div>
              <div className="text-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                  onClick={() => window.open("#", "_blank")}
                >
                  View
                </Button>
              </div>
            </div>

            {/* Education Entry 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-fade-in-up animation-delay-800">
              <div className="text-center md:text-right">
                <p className="text-lg font-semibold text-white">2022 September - 2024 December</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-lg">Computer Science at Riara University</p>
              </div>
              <div className="text-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
                  onClick={() => window.open("#", "_blank")}
                >
                  View
                </Button>
              </div>
            </div>

            {/* Education Entry 4 */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-fade-in-up animation-delay-600">
  <div className="text-center md:text-right">
    <p className="text-lg font-semibold text-white">2023 September - 2024 February</p>
  </div>
  <div className="text-center md:text-left">
    <p className="text-white text-lg">
      NDG Linux Essentials at Cisco Networking Academy program.
    </p>
  </div>
  <div className="text-center">
    <Button
      size="sm"
      variant="outline"
      className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1ffCgZUQeH7mazt553PY-JDBvGldAAuuE/view?usp=sharing",
          "_blank"
        )
      }
    >
      View
    </Button>
  </div>
</div>

             {/* Education Entry 5 */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-fade-in-up animation-delay-600">
  <div className="text-center md:text-right">
    <p className="text-lg font-semibold text-white">2023 September - 2024 February</p>
  </div>
  <div className="text-center md:text-left">
    <p className="text-white text-lg">
      CLA - Programming Essentials in C at Cisco Networking Academy program.
    </p>
  </div>
  <div className="text-center">
    <Button
      size="sm"
      variant="outline"
      className="border-teal-400 text-teal-200 hover:bg-teal-400 hover:text-teal-900 bg-transparent"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1rGFmkJ6QOSaWUs-Bm-Bnws0Z32N5JQoV/view?usp=sharing",
          "_blank"
        )
      }
    >
      View
    </Button>
  </div>
</div>



          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-16">
            <div className="w-12 h-12 mx-auto rounded-full border-2 border-teal-300 flex items-center justify-center animate-bounce">
              <ChevronUp className="h-5 w-5 text-teal-300 transform rotate-180" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up text-white drop-shadow-lg">
              CONTACT
            </h2>
            <div className="w-24 h-1 bg-teal-300 mx-auto animate-fade-in-up animation-delay-200"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              <p className="text-teal-100 mb-8 text-lg leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                just want to connect, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:johnoito0@gmail.com"
                      className="text-teal-200 hover:text-teal-100 transition-colors"
                    >
                      johnoito0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <a
                      href="https://github.com/john89000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-200 hover:text-teal-100 transition-colors"
                    >
                      github.com/johnoito
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/john-oito/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-200 hover:text-teal-100 transition-colors"
                    >
                      linkedin.com/in/johnoito
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-teal-200 mb-4">
              © 2025 John Oito. All rights reserved. Built with passion and modern web technologies.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/john89000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/john-oito/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:johnoito0@gmail.com" className="text-teal-200 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg z-50 animate-bounce"
          size="sm"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
