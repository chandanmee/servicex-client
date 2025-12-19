import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import { H2, Button } from "@/components/ui";
import {
  Modal,
  ConfirmationDialog,
  Drawer,
  SideSheet,
  Popover,
  DropdownMenu,
  ContextMenu,
  Lightbox,
  FullscreenOverlay,
  CommandPalette
} from "@/components/overlay";

export default function OverlayDemo() {
  const [openModal, setOpenModal] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openSheet, setOpenSheet] = React.useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
  const [openLightbox, setOpenLightbox] = React.useState(false);
  const [openFullscreen, setOpenFullscreen] = React.useState(false);
  const [openPalette, setOpenPalette] = React.useState(false);
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Overlay Demo</H2>

      <SectionContainer title="Modal & Confirmation">
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
          <Button variant="secondary" onClick={() => setOpenConfirm(true)}>Confirm</Button>
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)} title="Example Modal">
          <div className="text-sm">Modal content goes here</div>
        </Modal>
        <ConfirmationDialog
          open={openConfirm}
          title="Delete Item"
          message="Are you sure?"
          onCancel={() => setOpenConfirm(false)}
          onConfirm={() => setOpenConfirm(false)}
        />
      </SectionContainer>

      <SectionContainer title="Drawer & SideSheet">
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
          <Button variant="secondary" onClick={() => setOpenSheet(true)}>Open SideSheet</Button>
        </div>
        <Drawer open={openDrawer} side="right" onClose={() => setOpenDrawer(false)}>
          <div className="text-sm">Drawer content</div>
        </Drawer>
        <SideSheet open={openSheet} title="Details" onClose={() => setOpenSheet(false)}>
          <div className="text-sm">Side sheet content</div>
        </SideSheet>
      </SectionContainer>

      <SectionContainer title="Popover & Dropdown">
        <div className="flex items-center gap-4">
          <Popover open={openPopover} placement="bottom" content={<div>Popover content</div>}>
            <Button onClick={() => setOpenPopover((v) => !v)}>Toggle Popover</Button>
          </Popover>
          <DropdownMenu
            items={[{ label: "Action A" }, { label: "Action B" }]}
          >
            <Button variant="secondary">Open Menu</Button>
          </DropdownMenu>
        </div>
      </SectionContainer>

      <SectionContainer title="Context Menu">
        <ContextMenu
          items={[{ label: "Copy" }, { label: "Paste" }, { label: "Delete" }]}
          className="min-w-[8rem]"
        >
          <div className="border rounded p-4 text-sm">Right-click here</div>
        </ContextMenu>
      </SectionContainer>

      <SectionContainer title="Lightbox & Fullscreen Overlay">
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpenLightbox(true)}>Open Lightbox</Button>
          <Button variant="secondary" onClick={() => setOpenFullscreen(true)}>Open Fullscreen</Button>
        </div>
        <Lightbox open={openLightbox} src="https://via.placeholder.com/800x600.png" alt="Demo" onClose={() => setOpenLightbox(false)} />
        <FullscreenOverlay open={openFullscreen} onClose={() => setOpenFullscreen(false)}>
          <div className="bg-white rounded p-6 shadow text-sm">Fullscreen content</div>
        </FullscreenOverlay>
      </SectionContainer>

      <SectionContainer title="Command Palette">
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpenPalette(true)}>Open Palette</Button>
        </div>
        <CommandPalette
          open={openPalette}
          onClose={() => setOpenPalette(false)}
          commands={[
            { label: "Go to Login", action: () => location.assign("/login"), shortcut: "G L" },
            { label: "Open UI Demo", action: () => location.assign("/ui"), shortcut: "G U" }
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
