"use client";
import { postRegisterApi } from "@/api/postRegisterApi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { RegisterRequest } from "../types/RegisterRequest";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    try {
      const body: RegisterRequest = {
        login: login,
        name: name,
        password: password,
      };
      const data = await postRegisterApi(body);

      localStorage.setItem("token", data.token);

      toast.success("Welcome! Register successful.", {
        position: "bottom-left",
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      setTimeout(() => {
        router.push("/home");
      }, 2000);
      console.log("Logado!", data);
    } catch (err) {
      toast.error(
        "Register failed. Please check your credentials and try again.",
        {
          position: "bottom-left",
          style: {
            backgroundColor: "red",
            color: "white",
          },
        },
      );
      if (err instanceof Error) {
        setError(err.message);
        console.log(err);
      } else {
        setError("Erro inesperado");
      }
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register your account</CardTitle>
          <CardDescription>
            Enter your details to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="login">Login</Label>
                <Input
                  id="login"
                  type="login"
                  required
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="login">Name</Label>
                <Input
                  id="name"
                  type="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
