const BASE_URL = "http://localhost:3000";

export async function insertTestcase() {
  return fetch(`${BASE_URL}/regression`)
    .then((response) => response.json());
}

export async function updateTestcase() {}

export async function getTestsuites() {}

export async function getTestcases() {}

export async function getTestcasesByProudctIdx(productIdx: number) {}

