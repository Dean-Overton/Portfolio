import { Award, Brain, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md shadow-sm">
        {/* Education Details */}
        <div className="space-y-4">
          {/* Degree */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-card-foreground mb-1">
              Bachelor of Computer Science
            </h4>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>University of Wollongong (UOW)</span>
            </div>
          </div>

          {/* Major */}
          <div className="bg-secondary/30 rounded-md p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-medium text-card-foreground">Major:</span>
              <span className="text-[color:var(--color-text-secondary)] font-medium">
                AI & Big Data
              </span>
            </div>
          </div>

          {/* WAM */}
          <div className="bg-accent/20 rounded-md p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-[color:var(--color-text-important)]" />
              <span className="font-medium text-card-foreground">WAM:</span>
              <span className="text-[color:var(--color-text-important)] font-bold text-lg">
                84
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
