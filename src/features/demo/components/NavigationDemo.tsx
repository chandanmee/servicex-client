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
  const [tab, setTab] = React.useState(0);
  const [vtab, setVTab] = React.useState(0);
  const [page, setPage] = React.useState(2);
  const [wiz, setWiz] = React.useState(1);
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Navigation Demo</H2>
      <SectionContainer title="Header & Navbar">
        <Header title="ServiceX" right={<Button>Action</Button>} />
        <Navbar
          right={
            <div className="flex items-center gap-3 text-sm">
              <Link to="/">Home</Link>
              <Link to="/ui">UI</Link>
            </div>
          }
        />
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
        <Tabs tabs={[{ label: "Tab 1" }, { label: "Tab 2" }]} current={tab} onChange={setTab} />
        <div className="mt-2 text-sm">{tab === 0 ? <div>One</div> : <div>Two</div>}</div>
        <div className="mt-4">
          <VerticalTabs tabs={[{ label: "A" }, { label: "B" }]} current={vtab} onChange={setVTab} />
          <div className="mt-2 text-sm">{vtab === 0 ? <div>A</div> : <div>B</div>}</div>
        </div>
      </SectionContainer>
      <SectionContainer title="Pagination & Wizard">
        <div className="flex items-center justify-between">
          <Pagination page={page} totalPages={10} onChange={setPage} />
          <Wizard
            steps={[
              { label: "Start", content: <div className="text-sm">Start</div> },
              { label: "Info", content: <div className="text-sm">Info</div> },
              { label: "Confirm", content: <div className="text-sm">Confirm</div> }
            ]}
            current={wiz}
            onChange={setWiz}
          />
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
