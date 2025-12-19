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

export default function UiDemo() {
  const [loading, setLoading] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  return (
    <div className="p-6 space-y-8">
      <H2>UI Demo</H2>

      <section className="space-y-3">
        <div className="font-medium">Buttons & Actions</div>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <IconButton aria-label="Settings">⚙️</IconButton>
        <LinkButton to="/login">Link Button</LinkButton>
        <SplitButton label="Run" onClickMain={() => {}} onClickSecondary={() => {}} />
        <ToggleButton pressed={toggled} onChange={setToggled}>Toggle</ToggleButton>
        <LoadingButton loading={loading} onClick={() => setLoading((v) => !v)}>Load</LoadingButton>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
        <Fab>+</Fab>
      </section>

      <Divider />

      <section className="space-y-3">
        <div className="font-medium">Typography & Display</div>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
        <Text>Paragraph text example</Text>
        <Label htmlFor="demo">Label</Label>
        <Caption>Caption text</Caption>
        <div className="space-x-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <div className="space-x-2">
          <Tag>Tag</Tag>
          <Tag onRemove={() => {}}>Removable</Tag>
        </div>
        <Tooltip content="Tooltip text">
          <Button>Hover me</Button>
        </Tooltip>
        <div className="space-x-2">
          <Avatar name="Jane Doe" />
          <Avatar src="https://via.placeholder.com/64" />
        </div>
        <div className="space-x-2">
          <Icon>⭐</Icon>
          <Icon size="lg">⚙️</Icon>
        </div>
      </section>
      <section className="space-y-3">
        <div className="font-medium">Inputs & Controls</div>
        <TextInput label="Text" placeholder="Type text" />
        <PasswordInput label="Password" placeholder="Enter password" />
        <EmailInput label="Email" placeholder="me@example.com" />
        <NumberInput label="Number" placeholder="123" />
        <SearchInput label="Search" placeholder="Search..." />
        <Textarea label="Textarea" placeholder="Write something..." />
        <Select label="Select" options={[{ label: "A", value: "a" }, { label: "B", value: "b" }]} />
        <MultiSelect label="Multi" options={[{ label: "X", value: "x" }, { label: "Y", value: "y" }]} />
        <Checkbox label="Accept terms" />
        <div className="space-x-2">
          <Radio name="r" label="Option 1" />
          <Radio name="r" label="Option 2" />
        </div>
        <Switch checked={switchOn} onChange={setSwitchOn} />
        <Slider label="Volume" defaultValue={50} />
        <DatePicker label="Date" />
        <TimePicker label="Time" />
        <DateTimePicker label="DateTime" />
        <FileUpload label="File" />
        <DropzoneUpload onFiles={() => {}} />
        <OtpInput length={6} value={otp} onChange={setOtp} />
      </section>
    </div>
  );
}
