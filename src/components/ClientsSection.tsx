import React from "react";
import { clients } from "@/lib/data";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🤝 Clients & Collaborations
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <MotionWrapper key={client.name} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-purple-500/5">
                  <CardTitle className="text-center md:text-left transition-colors duration-300">
                    {client.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground my-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {client.description}
                  </p>
                  {client.technologies && client.technologies.length > 0 && (
                    <div className="mt-4">
                      <span className="text-xs font-semibold uppercase tracking-wide mb-2 block">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {client.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-purple-500/5">
                  {client.website ? (
                    <motion.a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Website
                    </motion.a>
                  ) : (
                    <div className="text-sm text-muted-foreground pt-8 italic">
                      Confidential Project
                    </div>
                  )}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}