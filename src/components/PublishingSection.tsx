import { publications } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { BookOpen } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function PublishingSection() {
  return (
    <section
      id="publications"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            📄 Scientific Publications
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {publications.map((publication, index) => (
            <TimelineItem
              key={publication.title}
              title={publication.title}
              subtitle={`📖 ${publication.journal}`}
              date={`📅 ${publication.date}`}
              isLast={index === publications.length - 1}
              index={index}
            >
              {publication.authors && (
                <p className="text-xs text-muted-foreground mb-2">
                  👥 {publication.authors}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                  {publication.type}
                </span>
                {publication.doi && (
                  <span className="px-2 py-1 text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full border border-amber-500/20">
                    DOI: {publication.doi}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {publication.abstract}
              </p>

              {publication.keywords && publication.keywords.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-blue-500/20 dark:bg-card/10 dark:border-blue-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.125, delay: 0.0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-500/10 mr-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                    </div>
                    <h4 className="text-sm font-medium">
                      🔬 Keywords
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-4">
                    {publication.keywords.map((keyword, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {(publication.url || publication.doi) && (
                <motion.div
                  className="mt-4 flex gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {publication.url && (
                    <motion.a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📎 Read Paper
                    </motion.a>
                  )}
                  {publication.doi && (
                    <motion.a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔗 DOI Link
                    </motion.a>
                  )}
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}