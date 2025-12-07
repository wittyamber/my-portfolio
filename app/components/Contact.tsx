import { Mail, Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm"; 

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
                Have a project in mind or just want to chat? Send me a message below.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
                <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                    <div className="space-y-4">
                        <Link href="mailto:your.email@example.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Email</p>
                                <p className="text-muted-foreground text-sm">bausingjuanamae@gmail.com</p>
                            </div>
                        </Link>
                        
                        <Link href="/cv.pdf" target="_blank" className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">CV / Resume</p>
                                <p className="text-muted-foreground text-sm">Download PDF</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border">
                        <h4 className="text-sm font-semibold mb-4">Social Profiles</h4>
                        <div className="flex gap-4">
                            <Link 
                                href="https://github.com/wittyamber" 
                                target="_blank" 
                                className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </Link>

                                <Link 
                                href="www.linkedin.com/in/juanamaebausing" 
                                target="_blank" 
                                className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
                <ContactForm />
            </div>

        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-4 pt-24 mt-12 border-t border-border/40">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Juana Mae. | All rights reserved.
            </p>
        </div>

      </div>
    </section>
  );
}