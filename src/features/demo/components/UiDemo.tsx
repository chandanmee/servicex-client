import React from "react";
import {
  Button,
  IconButton,
  LinkButton,
  Fab,
  SplitButton,
  ToggleButton,
  LoadingButton,
  ButtonGroup,
  H1, H2, H3, H4, H5, H6,
  Text,
  Label,
  Caption,
  Badge,
  Tag,
  Tooltip,
  Divider,
  Avatar,
  Icon,
  TextInput,
  PasswordInput,
  EmailInput,
  NumberInput,
  SearchInput,
  Textarea,
  Select,
  MultiSelect,
  Checkbox,
  Radio,
  Switch,
  Slider,
  DatePicker,
  TimePicker,
  DateTimePicker,
  FileUpload,
  DropzoneUpload,
  OtpInput
} from "@/components/ui";
import { PageContainer, SectionContainer } from "@/components/layout";

export default function UiDemo() {
  const [loading, setLoading] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2 className="mb-2">UI Demo</H2>

      <SectionContainer title="Buttons & Actions">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <IconButton aria-label="Settings">⚙️</IconButton>
            <LinkButton to="/login">Link Button</LinkButton>
            <SplitButton label="Run" onClickMain={() => {}} onClickSecondary={() => {}} />
            <ToggleButton pressed={toggled} onChange={setToggled}>Toggle</ToggleButton>
            <LoadingButton loading={loading} onClick={() => setLoading((v) => !v)}>Load</LoadingButton>
            <Fab>+</Fab>
          </div>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
          </ButtonGroup>
        </div>
      </SectionContainer>

      <Divider />

      <SectionContainer title="Typography & Display">
        <div className="space-y-3">
          <div className="space-y-1">
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
          </div>
          <Text>Paragraph text example</Text>
          <Label htmlFor="demo">Label</Label>
          <Caption>Caption text</Caption>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag>Tag</Tag>
            <Tag onRemove={() => {}}>Removable</Tag>
          </div>
          <Tooltip content="Tooltip text">
            <Button>Hover me</Button>
          </Tooltip>
          <div className="flex flex-wrap gap-2 items-center">
            <Avatar name="Jane Doe" />
            <Avatar src="https://via.placeholder.com/64" />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Icon>⭐</Icon>
            <Icon size="lg">⚙️</Icon>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer title="Inputs & Controls">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput label="Text" placeholder="Type text" />
          <PasswordInput label="Password" placeholder="Enter password" />
          <EmailInput label="Email" placeholder="me@example.com" />
          <NumberInput label="Number" placeholder="123" />
          <SearchInput label="Search" placeholder="Search..." />
          <Textarea label="Textarea" placeholder="Write something..." />
          <Select label="Select" options={[{ label: "A", value: "a" }, { label: "B", value: "b" }]} />
          <MultiSelect label="Multi" options={[{ label: "X", value: "x" }, { label: "Y", value: "y" }]} />
        </div>
        <div className="mt-4 space-y-3">
          <Checkbox label="Accept terms" />
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex gap-3">
              <Radio name="r" label="Option 1" />
              <Radio name="r" label="Option 2" />
            </div>
            <Switch checked={switchOn} onChange={setSwitchOn} />
            <Slider label="Volume" defaultValue={50} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DatePicker label="Date" />
            <TimePicker label="Time" />
            <DateTimePicker label="DateTime" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FileUpload label="File" />
            <DropzoneUpload onFiles={() => {}} />
          </div>
          <OtpInput length={6} value={otp} onChange={setOtp} />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
