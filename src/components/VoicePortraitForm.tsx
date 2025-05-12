import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function VoicePortraitForm() {
  const [name, setName] = useState("");
  const [traits, setTraits] = useState("");
  const [voiceClips, setVoiceClips] = useState<FileList | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("traits", traits);
    if (photo) formData.append("photo", photo);
    if (voiceClips) {
      Array.from(voiceClips).forEach((file, index) => {
        formData.append(`voiceClip_${index}`, file);
      });
    }

    // You can replace the fetch URL with your backend endpoint
    await fetch("/api/submit-portrait", {
      method: "POST",
      body: formData,
    });

    alert("Submission successful! We will be in touch soon.");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Your AI Voice Portrait</h1>
      <Card>
        <CardContent className="space-y-4 p-4">
          <Input
            placeholder="Person's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="Describe the personality traits (e.g., witty, kind, sarcastic)"
            value={traits}
            onChange={(e) => setTraits(e.target.value)}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />
          <Input
            type="file"
            accept="audio/*"
            multiple
            onChange={(e) => setVoiceClips(e.target.files)}
          />
          <Button className="w-full" onClick={handleSubmit}>
            Submit Portrait Request
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
