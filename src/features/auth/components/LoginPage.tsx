import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { useAppDispatch } from "@/stores/redux/hooks";
import { setTokens } from "@/stores/redux/slices/authSlice";
import { Input, Button} from "@/components/ui";
import Modal from "@/components/overlay/Modal";


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<{ email: string; password: string }>({ resolver: zodResolver(schema) });

  async function onSubmit(values: { email: string; password: string }) {
    try {
      const res = await api.post("/auth/login", values);
      dispatch(setTokens({ accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }));
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Login failed");
      setOpen(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-6 bg-white rounded shadow space-y-3">
        <div className="text-xl font-semibold">Login</div>
        <Input label="Email" error={errors.email?.message} placeholder="Email" {...register("email")} />
        <Input label="Password" error={errors.password?.message} type="password" placeholder="Password" {...register("password")} />
        <Button className="w-full" disabled={isSubmitting}>Continue</Button>
      </form>
      <Modal open={open} onClose={() => setOpen(false)} title="Error">
        <div className="text-red-600 text-sm">{errorMsg}</div>
      </Modal>
    </div>
  );
}
