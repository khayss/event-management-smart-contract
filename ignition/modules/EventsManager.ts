import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EventsManagerModule = buildModule("EventsManagerModule", (m) => {
  const eventsManager = m.contract("EventsManager", [], {});

  return { eventsManager };
});

export default EventsManagerModule;
