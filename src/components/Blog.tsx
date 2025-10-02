import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build and deploy applications.",
      author: "Alex Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/work/aiFut.png",
      featured: true
    },
    {
      id: 2,
      title: "Best Practices for React Performance Optimization",
      excerpt: "Learn advanced techniques to optimize your React applications for better performance and user experience.",
      author: "Sarah Chen",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Frontend Development",
      image: "/work/react.png",
      featured: false
    },
    {
      id: 3,
      title: "Building Scalable Microservices with Node.js",
      excerpt: "A comprehensive guide to designing and implementing microservices architecture using Node.js.",
      author: "Mike Rodriguez",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Backend Development",
      image: "/work/node.png",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity Trends for 2024",
      excerpt: "Stay ahead of emerging security threats and protect your applications with these essential practices.",
      author: "Lisa Wong",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Security",
        image: "/work/cyber.png",
      featured: false
    }
  ];

  const categories = ["All", "AI & Technology", "Frontend Development", "Backend Development", "Security", "Mobile Development"];

  return (
    <section className="py-10 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold mb-4 md:mb-6">
           <span className="dark:gradient-primary bg-[linear-gradient(135deg,hsl(var(--primary-light)),hsl(var(--secondary-light)))] px-2 py-1 rounded">
           Our Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Stay updated with the latest insights, trends, and best practices in software development 
            and technology from our expert team.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={category === "All" ? "default" : "outline"} 
              size="sm"
              className="rounded-full text-xs md:text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {posts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-8 md:mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  Featured
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">
                  {post.category}
                </Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4">{post.title}</CardTitle>
                <CardDescription className="text-lg mb-6">{post.excerpt}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button className="w-fit group">
                  Read More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {posts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge variant="secondary" className="absolute top-4 left-4">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="sm" className="group">
                    Read More 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl md:rounded-2xl p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Stay Updated</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter and never miss our latest insights, tutorials, and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button className="gradient-primary text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;