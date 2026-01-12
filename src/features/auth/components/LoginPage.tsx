import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios";
import { useAppDispatch, useAppSelector } from "@/stores/redux/hooks";
import { setUser } from "@/stores/redux/slices/authSlice";
import { Input, Button } from "@/components/ui";
import Modal from "@/components/overlay/Modal";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string; password: string }>({
    resolver: zodResolver(schema),
  });

  // 🔒 Prevent authenticated users from seeing login page
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function onSubmit(values: { email: string; password: string }) {
    try {
      const res = await api.post("/auth/login", values);
      dispatch(setUser(res.data.user));

      // ✅ Redirect to dashboard/home
      navigate("/", { replace: true });
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Login failed");
      setOpen(true);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm p-3 bg-white rounded space-y-3"
      >
        <div className="text-xl font-semibold">Login</div>
        <Input
          label="Email"
          error={errors.email?.message}
          placeholder="Email"
          {...register("email")}
        />
        <Input
          label="Password"
          error={errors.password?.message}
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Button className="w-full" disabled={isSubmitting}>
          Continue
        </Button>
      </form>
      <Modal open={open} onClose={() => setOpen(false)} title="Error">
        <div className="text-red-600 text-sm">{errorMsg}</div>
      </Modal>
    </div>
  );
}
