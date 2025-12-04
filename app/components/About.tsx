export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an IT student with a passion for building things that live on the internet. 
              My journey started with a curiosity about how websites work, and it has evolved into a 
              love for creating seamless user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm likely exploring new tech stacks, designing in Figma, or 
              trying to figure out why my code isn't working (usually a missing semicolon).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border border-border rounded-2xl bg-zinc-50 dark:bg-zinc-900">
              <span className="block text-4xl font-bold text-blue-500 mb-2">4</span>
              <span className="text-sm text-muted-foreground">Years Studying IT</span>
            </div>
            <div className="p-6 border border-border rounded-2xl bg-zinc-50 dark:bg-zinc-900">
              <span className="block text-4xl font-bold text-cyan-500 mb-2">5+</span>
              <span className="text-sm text-muted-foreground">Projects Built</span>
            </div>
            <div className="p-6 border border-border rounded-2xl bg-zinc-50 dark:bg-zinc-900">
              <span className="block text-4xl font-bold text-purple-500 mb-2">100%</span>
              <span className="text-sm text-muted-foreground">Dedication</span>
            </div>
            <div className="p-6 border border-border rounded-2xl bg-zinc-50 dark:bg-zinc-900">
              <span className="block text-4xl font-bold text-pink-500 mb-2">∞</span>
              <span className="text-sm text-muted-foreground">Coffee Consumed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}