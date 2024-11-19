import { Star } from "lucide-react";

export default function ReviewsTab() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((review) => (
        <div key={review} className="border-b pb-4">
          <div className="flex items-center mb-2">
            <div className="font-semibold mr-2">Usuario {review}</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Excelente café, muy aromático y con un sabor equilibrado...
          </p>
        </div>
      ))}
    </div>
  );
}
