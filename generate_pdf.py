from fpdf import FPDF
import os

class ResumePDF(FPDF):
    def header(self):
        pass

    def footer(self):
        pass

def generate_resume_pdf():
    pdf = ResumePDF(format='A4', unit='mm')
    pdf.set_auto_page_break(auto=True, margin=8)
    pdf.set_margins(12, 10, 12)
    pdf.add_page()
    
    # Title - Name
    pdf.set_font('Times', 'B', 22)
    pdf.cell(0, 7, 'Ram Narayan', align='C', new_x='LMARGIN', new_y='NEXT')
    
    # Role
    pdf.set_font('Times', '', 12)
    pdf.cell(0, 5, 'Software Engineer', align='C', new_x='LMARGIN', new_y='NEXT')
    
    # Contact Info
    pdf.set_font('Times', '', 9.5)
    pdf.cell(0, 5, '8800977531 | ramj94907@gmail.com | linkedin.com/in/ramn1997 | Delhi, India', align='C', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(1)
    
    # Summary
    pdf.set_font('Times', '', 9.2)
    summary_text = (
        "Dedicated and experienced Software Engineer with 5+ years building secure, scalable web applications "
        "using Angular and ASP.NET Core. Expertise in microservices, REST APIs, JWT-based authentication, SQL databases, "
        "and core data structures. Proven ability to improve application performance, strengthen API security, and deliver "
        "business-critical solutions in Agile environments."
    )
    pdf.multi_cell(0, 4.2, summary_text)
    pdf.ln(2)

    def draw_section_header(title):
        pdf.set_font('Times', 'B', 10.5)
        pdf.cell(0, 5, title, new_x='LMARGIN', new_y='NEXT')
        pdf.set_draw_color(0, 0, 0)
        pdf.set_line_width(0.3)
        y = pdf.get_y()
        pdf.line(12, y, 198, y)
        pdf.ln(1.5)

    # 1. Technical Skills
    draw_section_header('TECHNICAL SKILLS')
    skills = [
        ("Languages:", "C#, JavaScript, TypeScript, SQL, Python"),
        ("Frontend:", "Angular (v12-15), React(Beginner v19), HTML5, CSS3, jQuery, Chart.js, Kendo UI, PrimeNG"),
        ("Backend:", "ASP.NET Core, ASP.NET MVC, REST APIs, WCF, Microservices, JWT, Entity Framework Core, LINQ, CQRS"),
        ("Database & Tools:", "MS SQL Server, PostgreSQL, Azure, Azure App Service, Azure DevOps, Azure Function, Azure Blob Storage, Docker, RabbitMQ, Git, Microsoft Dynamics 365, PowerApps, Power Automate, Postman, Swagger, XUnit"),
        ("Core Competencies:", "Data Structures & Algorithms, API Security, Performance Optimization, System Design")
    ]
    for category, items in skills:
        pdf.set_font('Times', 'B', 9)
        pdf.cell(34, 4, category, new_x='RIGHT', new_y='TOP')
        pdf.set_font('Times', '', 9)
        pdf.multi_cell(152, 4, items, new_x='LMARGIN', new_y='NEXT')
    pdf.ln(2)

    # 2. Professional Experience
    draw_section_header('PROFESSIONAL EXPERIENCE')
    
    experiences = [
        {
            "role": "Senior Software Engineer",
            "company": "Gallagher",
            "duration": "March 2026 - Present",
            "location": "Gurugram, India",
            "bullets": [
                "Developed secure and scalable Insurance Marketplace applications using ASP.NET Core, Angular, and SQL Server.",
                "Implemented JWT authentication and RBAC to secure distributed systems and prevent unauthorized access",
                "Integrated Azure Key Vault for secure secret management and Serilog for centralized logging and monitoring",
                "Automated application deployments and release processes using Azure DevOps CI/CD pipelines while following Agile development practices"
            ]
        },
        {
            "role": "Software Developer",
            "company": "Birlasoft Limited",
            "duration": "Jan 2022 - March 2026",
            "location": "Noida, India",
            "bullets": [
                "Designed scalable enterprise microservices with secure REST APIs supporting high-concurrency and real-time processing for Fortune 500 clients",
                "Implemented JWT authentication and RBAC to secure distributed systems and prevent unauthorized access",
                "Improved application response time by 25% through SQL optimization, caching, and indexing",
                "Migrated monolithic applications to Angular SPA, reducing UI load time by 40% for 10,000+ users",
                "Integrated microservices and third-party APIs using RabbitMQ for reliable messaging",
                "Provided L2 production support, resolving issues and maintaining 99.5% uptime SLA"
            ]
        },
        {
            "role": "Trainee Software Engineer",
            "company": "RMSI Private Limited",
            "duration": "Jan 2021 - Aug 2021",
            "location": "Noida, India",
            "bullets": [
                "Developed full-stack modules using ASP.NET MVC, PostgreSQL, and JavaScript with secure authentication",
                "Designed RESTful APIs and responsive UI components improving data reporting accuracy by 35%",
                "Worked in Agile teams to deliver features and enhancements in iterative release cycles"
            ]
        },
        {
            "role": "Associate Software Engineer",
            "company": "IDEMIA",
            "duration": "Dec 2019 - Sep 2020",
            "location": "Noida, India",
            "bullets": [
                "Built responsive web interfaces using ASP.NET MVC for global portals; secured backend with OAuth and SQL Server",
                "Optimized database queries using Entity Framework, improving application performance by 20%",
                "Partnered with QA teams to ensure secure, stable, and production-ready releases."
            ]
        }
    ]

    for exp in experiences:
        # Role & Duration
        pdf.set_font('Times', 'B', 9.2)
        pdf.cell(130, 4, exp['role'], new_x='RIGHT', new_y='TOP')
        pdf.set_font('Times', '', 9.2)
        pdf.cell(56, 4, exp['duration'], align='R', new_x='LMARGIN', new_y='NEXT')
        
        # Company & Location
        pdf.set_font('Times', 'I', 8.8)
        pdf.cell(130, 3.8, exp['company'], new_x='RIGHT', new_y='TOP')
        pdf.cell(56, 3.8, exp['location'], align='R', new_x='LMARGIN', new_y='NEXT')
        
        # Bullets
        pdf.set_font('Times', '', 8.5)
        for bullet in exp['bullets']:
            pdf.cell(4, 3.6, "-", new_x='RIGHT', new_y='TOP')
            pdf.multi_cell(182, 3.6, bullet, new_x='LMARGIN', new_y='NEXT')
        pdf.ln(1)

    # 3. Projects
    draw_section_header('PROJECTS')
    pdf.set_font('Times', '', 8.5)
    projects = [
        ("Progress Rail Business Tools (Sep 2024 - Nov 2025):", "Migrated K2 business app to PowerApps and Power Automate, modernizing workflow automation for rail operations"),
        ("HP CDAX (Jun 2023 - Aug 2024):", "Built customer support automation using Dynamics 365 and ASP.NET Core,Azure DevOps,Azure Services,Azure Function and Azure Blob reducing agent resolution time by 35%"),
        ("Conduent Payment Integrity (Oct 2022 - Jun 2023):", "Developed healthcare payment recovery platform with Angular 15, ASP.NET Core microservices, Azure DevOps, Azure Services and Azure Blob, and Kendo UI, processing $10M+ in claims annually"),
        ("Conduent Credit Balance (Jan 2022 - Oct 2022):", "Modernized legacy healthcare claims tools using Angular 12, PrimeNG, ASP.NET Core microservices,Azure DevOps,Azure Services and Azure Blob improving transparency for insurance providers"),
        ("ANRiN (Jan 2021 - Aug 2021):", "Built nutrition service delivery platform for Nigeria's health sector using ASP.NET MVC, PostgreSQL, jQuery, and Chart.js, serving 5,000+ healthcare workers"),
        ("Infinity Global BAP Portal (Jan 2020 - Sep 2020):", "Delivered SIM card monitoring and management portal using ASP.NET MVC, SQL Server,Windows application and WPF, streamlining operations across multiple regions")
    ]
    for title, desc in projects:
        pdf.set_font('Times', 'B', 8.5)
        pdf.write(3.6, title + " ")
        pdf.set_font('Times', '', 8.5)
        pdf.write(3.6, desc + "\n")
    pdf.ln(2)

    # 4. Education
    draw_section_header('EDUCATION')
    pdf.set_font('Times', 'B', 9.2)
    pdf.cell(130, 4, 'Manav Rachna International Institute of Research & Studies', new_x='RIGHT', new_y='TOP')
    pdf.set_font('Times', '', 9.2)
    pdf.cell(56, 4, 'Jul 2015 - Jun 2019', align='R', new_x='LMARGIN', new_y='NEXT')
    
    pdf.set_font('Times', 'I', 8.8)
    pdf.cell(130, 3.8, 'Bachelor of Technology in Computer Science (Cyber Security & Forensics - IBM)', new_x='RIGHT', new_y='TOP')
    pdf.set_font('Times', 'B', 8.8)
    pdf.cell(56, 3.8, 'CGPA: 6.7/10', align='R', new_x='LMARGIN', new_y='NEXT')
    pdf.ln(2)

    # 5. Achievements & Certifications
    draw_section_header('ACHIEVEMENTS & CERTIFICATIONS')
    pdf.set_font('Times', '', 8.5)
    pdf.set_font('Times', 'B', 8.5)
    pdf.write(3.6, "Smart India Hackathon 2019: ")
    pdf.set_font('Times', '', 8.5)
    pdf.write(3.6, "National finalist among 10,000+ teams | ")
    pdf.set_font('Times', 'B', 8.5)
    pdf.write(3.6, "Research: ")
    pdf.set_font('Times', '', 8.5)
    pdf.write(3.6, "Published \"Analysis of Iris Recognition\" at NCNCAC\n")
    
    pdf.set_font('Times', 'B', 8.5)
    pdf.write(3.6, "Certifications: ")
    pdf.set_font('Times', '', 8.5)
    pdf.write(3.6, "Generative AI, Building AI Agents, Data Structures & Algorithms, Microsoft SQL Server, Azure, Android Training (IBM)\n")

    os.makedirs("public", exist_ok=True)
    output_path = os.path.join("public", "Ram_Narayan_Resume.pdf")
    pdf.output(output_path)
    print(f"PDF generated successfully at {output_path}")

if __name__ == '__main__':
    generate_resume_pdf()
