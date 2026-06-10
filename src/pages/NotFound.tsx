import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Eat Repeat's brands, leadership and story instead."
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gradient-subtle py-24">
        <div className="text-center px-4 animate-fade-in">
          <p className="eyebrow justify-center mb-6">Lost Your Way?</p>
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold text-foreground leading-none mb-4">
            4<span className="font-display-italic text-primary">0</span>4
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-md mx-auto mb-10">
            This table doesn't seem to be set. The page you're looking for has
            moved or never existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-luxury px-8 py-4 font-body">
                Back to Home
              </Button>
            </Link>
            <Link to="/brands">
              <Button
                variant="outline"
                className="px-8 py-4 font-body border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Explore Our Brands
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
