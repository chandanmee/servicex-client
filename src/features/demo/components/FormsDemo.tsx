import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import {
  FormWrapper,
  FormSection,
  FieldGroup,
  ValidationSummary,
  MultiStepForm,
  ConditionalFields,
  DynamicFieldArray,
  SaveDraftIndicator,
  AutoSaveStatus
} from "@/components/forms";
import { H2, TextInput, Select, Checkbox, Button } from "@/components/ui";

export default function FormsDemo() {
  const [errors, setErrors] = React.useState<string[]>([]);
  const [step, setStep] = React.useState(0);
  const [saving, setSaving] = React.useState<"idle" | "saving" | "saved" | "error">("idle");
  const [lastSaved, setLastSaved] = React.useState<Date | undefined>();
  const [arr, setArr] = React.useState<string[]>([""]);
  React.useEffect(() => {
    const id = setInterval(() => {
      setSaving("saving");
      setTimeout(() => {
        setSaving("saved");
        setLastSaved(new Date());
      }, 500);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  function submit() {
    setErrors(["Name is required"]);
  }
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Forms Demo</H2>
      <SectionContainer title="Form Wrapper & Sections">
        <FormWrapper onSubmit={submit} actions={<Button type="submit">Submit</Button>}>
          <ValidationSummary errors={errors} />
          <FormSection title="Basic Info" description="Provide your details">
            <FieldGroup label="Name" required>
              <TextInput placeholder="Full name" />
            </FieldGroup>
            <FieldGroup label="Role">
              <Select options={[{ label: "Admin", value: "admin" }, { label: "User", value: "user" }]} />
            </FieldGroup>
          </FormSection>
          <FormSection title="Preferences">
            <Checkbox label="Subscribe" />
          </FormSection>
        </FormWrapper>
      </SectionContainer>
      <SectionContainer title="Multi-Step & Conditional">
        <MultiStepForm
          steps={[
            { title: "Step 1", content: <div className="text-sm">First step</div> },
            { title: "Step 2", content: <div className="text-sm">Second step</div> },
            { title: "Review", content: <div className="text-sm">Done</div> }
          ]}
          current={step}
          onChange={setStep}
        />
        <ConditionalFields show={step >= 1}>
          <div className="text-sm mt-3">Conditional content visible on Step 2+</div>
        </ConditionalFields>
      </SectionContainer>
      <SectionContainer title="Dynamic Array">
        <DynamicFieldArray
          items={arr}
          onChange={setArr}
          createDefault={() => ""}
          renderItem={(item, index, update, remove) => (
            <div className="flex items-center gap-2">
              <TextInput value={item} onChange={(e) => update((e.target as any).value)} placeholder={`Item ${index + 1}`} />
              <Button variant="secondary" onClick={remove}>Remove</Button>
            </div>
          )}
        />
      </SectionContainer>
      <SectionContainer title="Save Status">
        <div className="flex items-center gap-4">
          <SaveDraftIndicator status={saving} />
          <AutoSaveStatus status={saving} lastSavedAt={lastSaved} />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
