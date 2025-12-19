import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import {
  Table,
  DataGrid,
  SortableTable,
  FilterableTable,
  ExpandableRows,
  Card,
  CardList,
  Accordion,
  Timeline,
  List,
  TreeView,
  KeyValue,
  StatisticCard,
  ChartWrapper,
  Heatmap,
  CalendarView
} from "@/components/data-display";
import { H2 } from "@/components/ui";

export default function DataDisplayDemo() {
  const rows = [
    { id: 1, name: "Alpha", score: 82 },
    { id: 2, name: "Beta", score: 96 },
    { id: 3, name: "Gamma", score: 71 }
  ];
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "score", label: "Score" }
  ] as const;
  const cards = [
    { title: "Service A", content: "Running" },
    { title: "Service B", content: "Degraded" },
    { title: "Service C", content: "Stopped" }
  ];
  const heat = [
    [{ value: 1 }, { value: 4 }, { value: 2 }, { value: 6 }],
    [{ value: 3 }, { value: 2 }, { value: 5 }, { value: 8 }],
    [{ value: 2 }, { value: 1 }, { value: 4 }, { value: 3 }]
  ];
  const tree = [
    { label: "Root", children: [{ label: "Child 1" }, { label: "Child 2", children: [{ label: "Leaf" }] }] }
  ];
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Data Display Demo</H2>
      <SectionContainer title="Tables">
        <div className="space-y-4">
          <Table columns={columns as any} data={rows} />
          <DataGrid columns={columns as any} data={rows} pageSize={2} />
          <SortableTable columns={columns as any} data={rows} />
          <FilterableTable columns={columns as any} data={rows} />
          <ExpandableRows
            columns={columns as any}
            data={rows}
            renderExpanded={(r) => <div className="p-2 text-sm">Details for {r.name}</div>}
          />
        </div>
      </SectionContainer>
      <SectionContainer title="Cards & Lists">
        <div className="space-y-4">
          <Card title="Overview">This is a card</Card>
          <CardList items={cards.map((c, i) => ({ id: i, title: c.title, content: c.content }))} columns={3} />
          <Accordion items={[{ title: "Section 1", content: "Content 1" }, { title: "Section 2", content: "Content 2" }]} />
          <List items={[{ id: 1, title: "Item A", description: "Desc A" }, { id: 2, title: "Item B" }]} />
        </div>
      </SectionContainer>
      <SectionContainer title="Hierarchy & Timeline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TreeView data={tree} />
          <Timeline items={[{ time: "10:00", title: "Started" }, { time: "10:30", title: "Processed" }, { time: "11:00", title: "Completed" }]} />
        </div>
      </SectionContainer>
      <SectionContainer title="Key-Value & Stats">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <KeyValue items={[{ key: "Service", value: "Alpha" }, { key: "Status", value: "Running" }]} />
          <StatisticCard title="Incidents" value={12} delta="+2 this week" />
        </div>
      </SectionContainer>
      <SectionContainer title="Charts & Heatmap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartWrapper type="bar" data={[{ label: "Jan", value: 10 }, { label: "Feb", value: 20 }, { label: "Mar", value: 15 }]} />
          <ChartWrapper type="line" data={[{ label: "Mon", value: 3 }, { label: "Tue", value: 8 }, { label: "Wed", value: 5 }, { label: "Thu", value: 7 }, { label: "Fri", value: 6 }]} />
          <ChartWrapper type="pie" data={[{ label: "A", value: 30 }, { label: "B", value: 50 }, { label: "C", value: 20 }]} />
          <Heatmap data={heat} />
        </div>
      </SectionContainer>
      <SectionContainer title="Calendar">
        <CalendarView onSelect={() => {}} />
      </SectionContainer>
    </PageContainer>
  );
}
