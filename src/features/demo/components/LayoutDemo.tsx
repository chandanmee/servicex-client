import React from "react";
import { PageContainer, SectionContainer, Grid, Flex, ResponsiveWrapper, Spacer, Separator, StickyHeader, ScrollContainer, SplitView } from "@/components/layout";
import { H2, Button } from "@/components/ui";

export default function LayoutDemo() {
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Layout Demo</H2>
      <SectionContainer title="Grid & Flex">
        <Grid columns={3} gap={4} className="mb-4">
          <div className="p-4 border rounded">A</div>
          <div className="p-4 border rounded">B</div>
          <div className="p-4 border rounded">C</div>
        </Grid>
        <Flex gap={3} justify="between" align="center">
          <div className="p-3 border rounded">Left</div>
          <div className="p-3 border rounded">Center</div>
          <div className="p-3 border rounded">Right</div>
        </Flex>
      </SectionContainer>
      <SectionContainer title="Responsive Wrapper">
        <ResponsiveWrapper max="md" padded className="border rounded p-3">
          <div className="text-sm">This content is constrained to md</div>
        </ResponsiveWrapper>
      </SectionContainer>
      <SectionContainer title="Spacer & Separator">
        <div className="flex items-center">
          <Button>One</Button>
          <Spacer axis="horizontal" size={12} />
          <Button>Two</Button>
        </div>
        <div className="mt-4">
          <Separator />
        </div>
      </SectionContainer>
      <SectionContainer title="Sticky Header">
        <div className="border rounded overflow-hidden">
          <StickyHeader className="p-2">
            <div className="text-sm">Sticky area</div>
          </StickyHeader>
          <ScrollContainer direction="vertical" height={160} className="p-2 space-y-2">
            {Array.from({ length: 20 }).map((_, i) => <div key={i} className="border rounded p-2 text-sm">Row {i + 1}</div>)}
          </ScrollContainer>
        </div>
      </SectionContainer>
      <SectionContainer title="Split View">
        <SplitView
          left={<div className="border rounded p-4">Left Panel</div>}
          right={<div className="border rounded p-4">Right Panel</div>}
          gap={4}
          leftBasis={300}
        />
      </SectionContainer>
    </PageContainer>
  );
}
