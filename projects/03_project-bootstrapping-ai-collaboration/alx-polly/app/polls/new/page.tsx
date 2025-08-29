"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewPollPage() {
  const [options, setOptions] = useState<string[]>(["", ""]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create New Poll</h1>
        <Button variant="outline">Cancel</Button>
      </div>

      <Tabs defaultValue="basic" className="mx-auto max-w-3xl space-y-4">
        <TabsList>
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Poll Information</CardTitle>
              <CardDescription>Enter the details for your new poll</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="question">Poll Title</Label>
                  <Input id="question" placeholder="Enter a question or title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Input id="description" placeholder="Provide more context about your poll" />
                </div>
                <div className="space-y-2">
                  <Label>Poll Options</Label>
                  <div className="space-y-2">
                    {options.map((value, index) => (
                      <Input
                        key={index}
                        placeholder={`Option ${index + 1}`}
                        value={value}
                        onChange={(e) => {
                          const next = [...options];
                          next[index] = e.target.value;
                          setOptions(next);
                        }}
                      />
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button type="button" variant="outline" onClick={() => setOptions([...options, ""]) }>Add Option</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Poll Settings</CardTitle>
              <CardDescription>Configure additional options for your poll</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Allow users to select multiple options</span>
                </label>
                <label className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="h-4 w-4" />
                  <span>Require users to be logged in to vote</span>
                </label>
                <div className="space-y-2">
                  <Label htmlFor="end-date">Poll End Date (Optional)</Label>
                  <Input id="end-date" placeholder="dd/mm/yyyy, --:-- --" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mx-auto max-w-3xl flex justify-end">
        <Button>Create Poll</Button>
      </div>
    </div>
  );
}


