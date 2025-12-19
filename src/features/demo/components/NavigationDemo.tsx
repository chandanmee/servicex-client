import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import { H2, Button } from "@/components/ui";
import {
  BackButton,
  Breadcrumbs,
  CollapsibleMenu,
  FooterNavigation,
  Header,
  Navbar,
  Pagination,
  Sidebar,
  Tabs,
  VerticalTabs,
  Wizard
} from "@/components/navigation";
import { Link } from "react-router-dom";

export default function NavigationDemo() {
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Navigation Demo</H2>
      <SectionContainer title="Header & Navbar">
        <Header title="ServiceX" right={<Button>Action</Button>} />
        <Navbar links={[{ label: "Home", to: "/" }, { label: "UI", to: "/ui" }]} />
      </SectionContainer>
      <SectionContainer title="Breadcrumbs & Back">
        <div className="flex items-center gap-4">
          <BackButton />
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Demo", to: "/ui" }, { label: "Nav" }]} />
        </div>
      </SectionContainer>
      <SectionContainer title="Sidebar & Menu">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Sidebar items={[{ label: "Dashboard", to: "/" }, { label: "Settings", to: "/settings" }]} />
          <CollapsibleMenu items={[{ label: "Parent", children: [{ label: "Child A" }, { label: "Child B" }] }]} />
        </div>
      </SectionContainer>
      <SectionContainer title="Tabs & Vertical Tabs">
        <Tabs tabs={[{ label: "Tab 1", content: <div>One</div> }, { label: "Tab 2", content: <div>Two</div> }]} />
        <div className="mt-4">
          <VerticalTabs tabs={[{ label: "A", content: <div>A</div> }, { label: "B", content: <div>B</div> }]} />
        </div>
      </SectionContainer>
      <SectionContainer title="Pagination & Wizard">
        <div className="flex items-center justify-between">
          <Pagination current={2} total={10} onChange={() => {}} />
          <Wizard steps={["Start", "Info", "Confirm"]} current={1} />
        </div>
      </SectionContainer>
      <SectionContainer title="Footer Navigation">
        <FooterNavigation items={[{ label: "Home", to: "/" }, { label: "UI", to: "/ui" }, { label: "Login", to: "/login" }]} />
      </SectionContainer>
      <SectionContainer title="Links">
        <div className="flex gap-3">
          <Link to="/demo/data">Data Display Demo</Link>
          <Link to="/demo/domain">Domain Demo</Link>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
