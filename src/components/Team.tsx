import React from 'react'
import { Card, CardContent } from './ui/card';
import { authors } from "@/data/authors";
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Team() {

    const getInitialsFromName = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };


  return (
    <div>
        <Card className="mt-12 bg-gradient-card border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Development Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors.map((author) => {
                const imageSrc = author.avatar;
                return (
                  <div className="text-center" key={author.id}>
                    <Avatar className="h-20 border  w-20 mx-auto mb-4">
                      <AvatarImage className="object-cover object-center" src={imageSrc} alt={`${author.name} - ${author.role}`} />
                      <AvatarFallback>{getInitialsFromName(author.name)}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-lg">{author.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{author.role}</p>
                    <p className="text-xs text-muted-foreground">{author.bio}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Our team is dedicated to connecting pet owners with the best local services through innovative technology.
              </p>
              <Button variant="outline">Join Our Team</Button>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}
