import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component rendering tests", () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  beforeEach(() => {
    window.history.pushState({}, "", "/");

    render(<App />);
  });

  test("renders Heading and paragraph elements", async () => {
    const textElement1 = screen.getByText(/Tasks/i);
    const textElement2 = screen.getByText(/delight/i);
    expect(textElement1).toBeInTheDocument();
    expect(textElement2).toBeInTheDocument();
  });

  test("renders filters with initial values", async () => {
    const filterElements = await screen.findAllByRole("combobox");
    expect(filterElements).toHaveLength(3);
    expect(filterElements[0]).toHaveValue("Status");
    expect(filterElements[1]).toHaveValue("Priority");
    expect(filterElements[2]).toHaveValue("Associated");
  });

  test("renders the list of initial tasks", async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    const rowElementFirst = await screen.findByText(/create react app/i);
    const rowElementLast = screen.getAllByText(/create skeleton/i);
    expect(rowElementFirst).toBeInTheDocument();
    expect(rowElementLast).toHaveLength(2);
  });

  test("renders the list of tasks after filtering", async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    const filterElements = await screen.findAllByRole("combobox");
    await userEvent.selectOptions(filterElements[0], "Pending");
    await userEvent.selectOptions(filterElements[1], "High");
    expect(filterElements[0]).toHaveValue("Pending");
    expect(filterElements[1]).toHaveValue("High");
    const rowElement1 = await screen.findByText(/add/i);
    const rowElement2 = screen.getAllByText(/crud/i);
    expect(rowElement1).toBeInTheDocument();
    expect(rowElement2).toHaveLength(2);
  });

  test("rendering of create task button and navigation to create task page", async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    const createButton = screen.getByRole("link", { name: /create task/i });
    expect(createButton).toBeInTheDocument();
    userEvent.click(createButton);
    const taskInputElement = await screen.findByRole("textbox", {
      name: /task/i,
    });
    const descriptionInputElement = screen.getByRole("textbox", {
      name: /description/i,
    });
    const ownerInputElement = screen.getByRole("textbox", { name: /owner/i });
    const priorityElement = screen.getByRole("combobox", { name: /priority/i });
    expect(taskInputElement).toBeInTheDocument();
    expect(descriptionInputElement).toBeInTheDocument();
    expect(ownerInputElement).toBeInTheDocument();
    expect(priorityElement).toBeInTheDocument();
  });

  test("rendering home page and navigating to details page", async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    // screen.debug(null, Infinity);
    const rowElement = await screen.findByText("Implement CRUD");
    userEvent.click(rowElement);
    const taskInputElement = await screen.findByRole("textbox", {
      name: /task/i,
    });
    const descriptionInputElement = screen.getByRole("textbox", {
      name: /description/i,
    });
    const ownerInputElement = screen.getByRole("textbox", { name: /owner/i });
    const priorityElement = screen.getByRole("combobox", { name: /priority/i });
    expect(taskInputElement).toBeInTheDocument();
    expect(descriptionInputElement).toBeInTheDocument();
    expect(ownerInputElement).toBeInTheDocument();
    expect(priorityElement).toBeInTheDocument();
  });
});
