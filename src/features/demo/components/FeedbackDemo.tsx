import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import {
  Alert,
  BellBadge,
  EmptyState,
  InlineValidation,
  LoadingSpinner,
  ProgressBar,
  ProgressStepper,
  Skeleton,
  Snackbar,
  StatusIndicator,
  Toast
} from "@/components/feedback";
import { H2, Button } from "@/components/ui";

export default function FeedbackDemo() {
  const [toastOpen, setToastOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Feedback Demo</H2>
      <SectionContainer title="Alerts & Indicators">
        <div className="space-y-3">
          <Alert variant="info" title="Heads up" description="Informational message" />
          <Alert variant="success" title="Done" description="Operation succeeded" />
          <Alert variant="error" title="Error" description="Something went wrong" />
          <div className="flex items-center gap-4">
            <BellBadge count={3} />
            <StatusIndicator status="success" />
            <StatusIndicator status="warning" />
            <StatusIndicator status="error" />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer title="Loading & Progress">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <LoadingSpinner />
            <Skeleton className="h-6 w-48" />
          </div>
          <ProgressBar value={60} />
          <ProgressStepper steps={["Start", "Process", "Finish"]} current={1} />
        </div>
      </SectionContainer>
      <SectionContainer title="Empty & Validation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmptyState title="No Data" description="There is nothing to show yet" />
          <InlineValidation message="This field is required" />
        </div>
      </SectionContainer>
      <SectionContainer title="Toast & Snackbar">
        <div className="flex items-center gap-3">
          <Button onClick={() => setToastOpen(true)}>Show Toast</Button>
          <Button onClick={() => setSnackOpen(true)} variant="secondary">Show Snackbar</Button>
          <Toast open={toastOpen} onClose={() => setToastOpen(false)} message="Toast message" variant="info" />
          <Snackbar open={snackOpen} onClose={() => setSnackOpen(false)} message="Snackbar message" />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
