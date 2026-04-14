// Curated 200-question CCNP ENAUTO simulator pool
window.pool = [
  {
    "id": "ENAUTO-001",
    "type": "single",
    "question": "[NETCONF] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-002",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-003",
    "type": "fill",
    "question": "[YANG models] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-004",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-005",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order.",
    "options": [
      "Deploy change",
      "Render intended config",
      "Collect current state",
      "Run dry validation"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Cisco NSO change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-006",
    "type": "single",
    "question": "[Webex API] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-007",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-008",
    "type": "fill",
    "question": "[Python requests] API scenario: You need to create a new telemetry subscription by sending JSON to /api/v1/subscriptions. Which HTTP method should you use?",
    "prompt": "Context: create a brand-new resource on the server. Answer with one lowercase HTTP method.",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-009",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "down",
      "DOWN"
    ]
  },
  {
    "id": "ENAUTO-010",
    "type": "dragdrop",
    "question": "[Ansible playbooks] Arrange the automation workflow in the correct order.",
    "options": [
      "Request resource",
      "Validate response",
      "Persist result",
      "Authenticate to API"
    ],
    "correct": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Ansible playbooks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-011",
    "type": "single",
    "question": "[GitOps workflow] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-012",
    "type": "multiple",
    "question": "[CI/CD pipeline] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-013",
    "type": "fill",
    "question": "[OAuth2 tokens] API scenario: You must fully replace policy object policy-ENAUTO-013 at /api/v1/policies/policy-ENAUTO-013 with a complete payload. Which HTTP method should you use?",
    "prompt": "Context: full replacement of an existing resource representation. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-014",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-015",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order.",
    "options": [
      "Filter target devices",
      "Load inventory",
      "Verify post-checks",
      "Execute playbook"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-016",
    "type": "single",
    "question": "[YAML inventory] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-017",
    "type": "multiple",
    "question": "[NTP sync] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-018",
    "type": "fill",
    "question": "[SNMP telemetry] API scenario: You only need to change the description field on /api/v1/interfaces/GigabitEthernet1/2. Which HTTP method should you use?",
    "prompt": "Context: partial update of an existing resource. Answer with one lowercase HTTP method.",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-019",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "failed",
      "FAILED"
    ]
  },
  {
    "id": "ENAUTO-020",
    "type": "dragdrop",
    "question": "[model-driven telemetry] Arrange the automation workflow in the correct order.",
    "options": [
      "Merge to main",
      "Run CI tests",
      "Create feature branch",
      "Commit automation change"
    ],
    "correct": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: model-driven telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-021",
    "type": "single",
    "question": "[EEM applets] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-022",
    "type": "multiple",
    "question": "[IOS XE guestshell] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-023",
    "type": "fill",
    "question": "[on-box Python] API scenario: You need to remove stale subscription sub-ENAUTO-023 at /api/v1/subscriptions/sub-ENAUTO-023. Which HTTP method should you use?",
    "prompt": "Context: delete/remove an existing resource. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-024",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "reachable"
  },
  {
    "id": "ENAUTO-025",
    "type": "dragdrop",
    "question": "[Genie parsers] Arrange the automation workflow in the correct order.",
    "options": [
      "Evaluate threshold",
      "Subscribe telemetry",
      "Ingest stream",
      "Trigger webhook"
    ],
    "c": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: Genie parsers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-026",
    "type": "single",
    "question": "[unit testing] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-027",
    "type": "multiple",
    "question": "[error handling] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-028",
    "type": "fill",
    "question": "[idempotency] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-029",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "unreachable",
      "UNREACHABLE"
    ]
  },
  {
    "id": "ENAUTO-030",
    "type": "dragdrop",
    "question": "[rollback strategy] Arrange the automation workflow in the correct order.",
    "options": [
      "Run dry validation",
      "Deploy change",
      "Collect current state",
      "Render intended config"
    ],
    "correct": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-031",
    "type": "single",
    "question": "[ACL automation] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-032",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-033",
    "type": "fill",
    "question": "[QoS policy deployment] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-034",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "active"
  },
  {
    "id": "ENAUTO-035",
    "type": "dragdrop",
    "question": "[OSPF health checks] Arrange the automation workflow in the correct order.",
    "options": [
      "Request resource",
      "Persist result",
      "Validate response",
      "Authenticate to API"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: OSPF health checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-036",
    "type": "single",
    "question": "[device onboarding] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-037",
    "type": "multiple",
    "question": "[certificate rotation] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-038",
    "type": "fill",
    "question": "[AAA configuration] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-039",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "standby",
      "STANDBY"
    ]
  },
  {
    "id": "ENAUTO-040",
    "type": "dragdrop",
    "question": "[webhook triggers] Arrange the automation workflow in the correct order.",
    "options": [
      "Verify post-checks",
      "Load inventory",
      "Execute playbook",
      "Filter target devices"
    ],
    "correct": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: webhook triggers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-041",
    "type": "single",
    "question": "[NETCONF] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-041."
  },
  {
    "id": "ENAUTO-042",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-042."
  },
  {
    "id": "ENAUTO-043",
    "type": "fill",
    "question": "[YANG models] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-043.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-044",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-044.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-045",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order.",
    "options": [
      "Commit automation change",
      "Run CI tests",
      "Create feature branch",
      "Merge to main"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Cisco NSO change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-045."
  },
  {
    "id": "ENAUTO-046",
    "type": "single",
    "question": "[Webex API] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-046."
  },
  {
    "id": "ENAUTO-047",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-047."
  },
  {
    "id": "ENAUTO-048",
    "type": "fill",
    "question": "[Python requests] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-049",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-049.",
    "c": [
      "down",
      "DOWN"
    ]
  },
  {
    "id": "ENAUTO-050",
    "type": "dragdrop",
    "question": "[Ansible playbooks] Arrange the automation workflow in the correct order.",
    "options": [
      "Ingest stream",
      "Trigger webhook",
      "Evaluate threshold",
      "Subscribe telemetry"
    ],
    "correct": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: Ansible playbooks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-050."
  },
  {
    "id": "ENAUTO-051",
    "type": "single",
    "question": "[GitOps workflow] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-051."
  },
  {
    "id": "ENAUTO-052",
    "type": "multiple",
    "question": "[CI/CD pipeline] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-052."
  },
  {
    "id": "ENAUTO-053",
    "type": "fill",
    "question": "[OAuth2 tokens] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-054",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-054.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-055",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order.",
    "options": [
      "Deploy change",
      "Collect current state",
      "Render intended config",
      "Run dry validation"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-055."
  },
  {
    "id": "ENAUTO-056",
    "type": "single",
    "question": "[YAML inventory] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-056."
  },
  {
    "id": "ENAUTO-057",
    "type": "multiple",
    "question": "[NTP sync] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-057."
  },
  {
    "id": "ENAUTO-058",
    "type": "fill",
    "question": "[SNMP telemetry] API scenario: You need to create a new telemetry subscription by sending JSON to /api/v1/subscriptions. Which HTTP method should you use?",
    "prompt": "Context: create a brand-new resource on the server. Answer with one lowercase HTTP method.",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-059",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-059.",
    "c": [
      "failed",
      "FAILED"
    ]
  },
  {
    "id": "ENAUTO-060",
    "type": "dragdrop",
    "question": "[model-driven telemetry] Arrange the automation workflow in the correct order.",
    "options": [
      "Persist result",
      "Request resource",
      "Validate response",
      "Authenticate to API"
    ],
    "correct": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: model-driven telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-060."
  },
  {
    "id": "ENAUTO-061",
    "type": "single",
    "question": "[EEM applets] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-061."
  },
  {
    "id": "ENAUTO-062",
    "type": "multiple",
    "question": "[IOS XE guestshell] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-062."
  },
  {
    "id": "ENAUTO-063",
    "type": "fill",
    "question": "[on-box Python] API scenario: You must fully replace policy object policy-ENAUTO-063 at /api/v1/policies/policy-ENAUTO-063 with a complete payload. Which HTTP method should you use?",
    "prompt": "Context: full replacement of an existing resource representation. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-064",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-064.",
    "correct": "reachable"
  },
  {
    "id": "ENAUTO-065",
    "type": "dragdrop",
    "question": "[Genie parsers] Arrange the automation workflow in the correct order.",
    "options": [
      "Verify post-checks",
      "Execute playbook",
      "Load inventory",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Genie parsers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-065."
  },
  {
    "id": "ENAUTO-066",
    "type": "single",
    "question": "[unit testing] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-066."
  },
  {
    "id": "ENAUTO-067",
    "type": "multiple",
    "question": "[error handling] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-067."
  },
  {
    "id": "ENAUTO-068",
    "type": "fill",
    "question": "[idempotency] API scenario: You only need to change the description field on /api/v1/interfaces/GigabitEthernet1/2. Which HTTP method should you use?",
    "prompt": "Context: partial update of an existing resource. Answer with one lowercase HTTP method.",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-069",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-069.",
    "c": [
      "unreachable",
      "UNREACHABLE"
    ]
  },
  {
    "id": "ENAUTO-070",
    "type": "dragdrop",
    "question": "[rollback strategy] Arrange the automation workflow in the correct order.",
    "options": [
      "Commit automation change",
      "Merge to main",
      "Create feature branch",
      "Run CI tests"
    ],
    "correct": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-070."
  },
  {
    "id": "ENAUTO-071",
    "type": "single",
    "question": "[ACL automation] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-071."
  },
  {
    "id": "ENAUTO-072",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-072."
  },
  {
    "id": "ENAUTO-073",
    "type": "fill",
    "question": "[QoS policy deployment] API scenario: You need to remove stale subscription sub-ENAUTO-073 at /api/v1/subscriptions/sub-ENAUTO-073. Which HTTP method should you use?",
    "prompt": "Context: delete/remove an existing resource. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-074",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-074.",
    "correct": "active"
  },
  {
    "id": "ENAUTO-075",
    "type": "dragdrop",
    "question": "[OSPF health checks] Arrange the automation workflow in the correct order.",
    "options": [
      "Ingest stream",
      "Trigger webhook",
      "Evaluate threshold",
      "Subscribe telemetry"
    ],
    "c": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: OSPF health checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-075."
  },
  {
    "id": "ENAUTO-076",
    "type": "single",
    "question": "[device onboarding] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-076."
  },
  {
    "id": "ENAUTO-077",
    "type": "multiple",
    "question": "[certificate rotation] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-077."
  },
  {
    "id": "ENAUTO-078",
    "type": "fill",
    "question": "[AAA configuration] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-078.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-079",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-079.",
    "c": [
      "standby",
      "STANDBY"
    ]
  },
  {
    "id": "ENAUTO-080",
    "type": "dragdrop",
    "question": "[webhook triggers] Arrange the automation workflow in the correct order.",
    "options": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "correct": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: webhook triggers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-080."
  },
  {
    "id": "ENAUTO-081",
    "type": "single",
    "question": "[NETCONF] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-081."
  },
  {
    "id": "ENAUTO-082",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-082."
  },
  {
    "id": "ENAUTO-083",
    "type": "fill",
    "question": "[YANG models] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-083.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-084",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-084.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-085",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order.",
    "options": [
      "Authenticate to API",
      "Persist result",
      "Request resource",
      "Validate response"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Cisco NSO change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-085."
  },
  {
    "id": "ENAUTO-086",
    "type": "single",
    "question": "[Webex API] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-086."
  },
  {
    "id": "ENAUTO-087",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-087."
  },
  {
    "id": "ENAUTO-088",
    "type": "fill",
    "question": "[Python requests] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-088.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-089",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "down",
      "DOWN"
    ]
  },
  {
    "id": "ENAUTO-090",
    "type": "dragdrop",
    "question": "[Ansible playbooks] Arrange the automation workflow in the correct order.",
    "options": [
      "Verify post-checks",
      "Load inventory",
      "Filter target devices",
      "Execute playbook"
    ],
    "correct": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Ansible playbooks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-090."
    ]
  },
  {
    "id": "ENAUTO-091",
    "type": "single",
    "question": "[GitOps workflow] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-091."
  },
  {
    "id": "ENAUTO-092",
    "type": "multiple",
    "question": "[CI/CD pipeline] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-092."
  },
  {
    "id": "ENAUTO-093",
    "type": "fill",
    "question": "[OAuth2 tokens] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-093.",
    "c": [
      "get",
      "GET"
    ]
    "question": "[OAuth2 tokens] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "c": "timeout"
  },
  {
    "id": "ENAUTO-094",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-094.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-095",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order.",
    "options": [
      "Merge to main",
      "Create feature branch",
      "Run CI tests",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-095."
    ]
  },
  {
    "id": "ENAUTO-096",
    "type": "single",
    "question": "[YAML inventory] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-096."
  },
  {
    "id": "ENAUTO-097",
    "type": "multiple",
    "question": "[NTP sync] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-097."
  },
  {
    "id": "ENAUTO-098",
    "type": "fill",
    "question": "[SNMP telemetry] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "retry",
      "RETRY"
    ]
  },
  {
    "id": "ENAUTO-099",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-099.",
    "c": [
      "failed",
      "FAILED"
    ]
  },
  {
    "id": "ENAUTO-100",
    "type": "dragdrop",
    "question": "[model-driven telemetry] Arrange the automation workflow in the correct order.",
    "options": [
      "Trigger webhook",
      "Ingest stream",
      "Evaluate threshold",
      "Subscribe telemetry"
    ],
    "correct": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: model-driven telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-100."
    ]
  },
  {
    "id": "ENAUTO-101",
    "type": "single",
    "question": "[EEM applets] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-101."
  },
  {
    "id": "ENAUTO-102",
    "type": "multiple",
    "question": "[IOS XE guestshell] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-102."
  },
  {
    "id": "ENAUTO-103",
    "type": "fill",
    "question": "[on-box Python] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "c": "get"
  },
  {
    "id": "ENAUTO-104",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-104.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "reachable"
  },
  {
    "id": "ENAUTO-105",
    "type": "dragdrop",
    "question": "[Genie parsers] Arrange the automation workflow in the correct order.",
    "options": [
      "Collect current state",
      "Run dry validation",
      "Render intended config",
      "Deploy change"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Genie parsers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-105."
  },
  {
    "id": "ENAUTO-106",
    "type": "single",
    "question": "[unit testing] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-106."
  },
  {
    "id": "ENAUTO-107",
    "type": "multiple",
    "question": "[error handling] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-107."
  },
  {
    "id": "ENAUTO-108",
    "type": "fill",
    "question": "[idempotency] API scenario: You need to create a new telemetry subscription by sending JSON to /api/v1/subscriptions. Which HTTP method should you use?",
    "question": "[idempotency] API scenario: You are creating a new automation job by sending a JSON body to /api/v1/jobs on the controller. Which HTTP method should you use?",
    "prompt": "Context: create a brand-new resource on the server. Answer with one lowercase HTTP method.",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-109",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-109.",
    "c": [
      "unreachable",
      "UNREACHABLE"
    ]
  },
  {
    "id": "ENAUTO-110",
    "type": "dragdrop",
    "question": "[rollback strategy] Arrange the automation workflow in the correct order.",
    "options": [
      "Request resource",
      "Authenticate to API",
      "Persist result",
      "Validate response"
    ],
    "correct": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-110."
  },
  {
    "id": "ENAUTO-111",
    "type": "single",
    "question": "[ACL automation] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-111."
    "c": "NETCONF"
  },
  {
    "id": "ENAUTO-112",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-112."
  },
  {
    "id": "ENAUTO-113",
    "type": "fill",
    "question": "[QoS policy deployment] API scenario: You must fully replace policy object policy-ENAUTO-113 at /api/v1/policies/policy-ENAUTO-113 with a complete payload. Which HTTP method should you use?",
    "prompt": "Context: full replacement of an existing resource representation. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-114",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "active"
  },
  {
    "id": "ENAUTO-115",
    "type": "dragdrop",
    "question": "[OSPF health checks] Arrange the automation workflow in the correct order.",
    "options": [
      "Verify post-checks",
      "Filter target devices",
      "Execute playbook",
      "Load inventory"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: OSPF health checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-115."
  },
  {
    "id": "ENAUTO-116",
    "type": "single",
    "question": "[device onboarding] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-116."
    "correct": "NETCONF"
  },
  {
    "id": "ENAUTO-117",
    "type": "multiple",
    "question": "[certificate rotation] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-117."
  },
  {
    "id": "ENAUTO-118",
    "type": "fill",
    "question": "[AAA configuration] API scenario: You only need to change the description field on /api/v1/interfaces/GigabitEthernet1/2. Which HTTP method should you use?",
    "prompt": "Context: partial update of an existing resource. Answer with one lowercase HTTP method.",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-119",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-119.",
    "c": [
      "standby",
      "STANDBY"
    ]
  },
  {
    "id": "ENAUTO-120",
    "type": "dragdrop",
    "question": "[webhook triggers] Arrange the automation workflow in the correct order.",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "correct": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: webhook triggers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-120."
  },
  {
    "id": "ENAUTO-121",
    "type": "single",
    "question": "[NETCONF] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF"
  },
  {
    "id": "ENAUTO-122",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-122."
  },
  {
    "id": "ENAUTO-123",
    "type": "fill",
    "question": "[YANG models] API scenario: You need to remove stale subscription sub-ENAUTO-123 at /api/v1/subscriptions/sub-ENAUTO-123. Which HTTP method should you use?",
    "prompt": "Context: delete/remove an existing resource. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
    "question": "[YANG models] API scenario: You need to remove obsolete webhook subscription sub-2123 from /api/v1/subscriptions/sub-2123. Which HTTP method should you use?",
    "prompt": "Context: delete/remove an existing resource. Answer with one lowercase HTTP method.",
    "c": "delete"
  },
  {
    "id": "ENAUTO-124",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-124.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-125",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order.",
    "options": [
      "Evaluate threshold",
      "Subscribe telemetry",
      "Ingest stream",
      "Trigger webhook"
    ],
    "c": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: Cisco NSO change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-125."
  },
  {
    "id": "ENAUTO-126",
    "type": "single",
    "question": "[Webex API] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-126."
  },
  {
    "id": "ENAUTO-127",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-127."
  },
  {
    "id": "ENAUTO-128",
    "type": "fill",
    "question": "[Python requests] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-128.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-129",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-129.",
    "c": [
      "down",
      "DOWN"
    ]
  },
  {
    "id": "ENAUTO-130",
    "type": "dragdrop",
    "question": "[Ansible playbooks] Arrange the automation workflow in the correct order.",
    "options": [
      "Deploy change",
      "Render intended config",
      "Run dry validation",
      "Collect current state"
    ],
    "correct": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Ansible playbooks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-130."
  },
  {
    "id": "ENAUTO-131",
    "type": "single",
    "question": "[GitOps workflow] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-131."
  },
  {
    "id": "ENAUTO-132",
    "type": "multiple",
    "question": "[CI/CD pipeline] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ]
  },
  {
    "id": "ENAUTO-133",
    "type": "fill",
    "question": "[OAuth2 tokens] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-133.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-134",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-134.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-135",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order.",
    "options": [
      "Authenticate to API",
      "Request resource",
      "Persist result",
      "Validate response"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-135."
  },
  {
    "id": "ENAUTO-136",
    "type": "single",
    "question": "[YAML inventory] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-136."
  },
  {
    "id": "ENAUTO-137",
    "type": "multiple",
    "question": "[NTP sync] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-137."
  },
  {
    "id": "ENAUTO-138",
    "type": "fill",
    "question": "[SNMP telemetry] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "token",
      "TOKEN"
    ]
  },
  {
    "id": "ENAUTO-139",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-139.",
    "c": [
      "failed",
      "FAILED"
    ]
  },
  {
    "id": "ENAUTO-140",
    "type": "dragdrop",
    "question": "[model-driven telemetry] Arrange the automation workflow in the correct order.",
    "options": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "correct": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: model-driven telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-140."
    ]
  },
  {
    "id": "ENAUTO-141",
    "type": "single",
    "question": "[EEM applets] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-141."
  },
  {
    "id": "ENAUTO-142",
    "type": "multiple",
    "question": "[IOS XE guestshell] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-142."
  },
  {
    "id": "ENAUTO-143",
    "type": "fill",
    "question": "[on-box Python] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-143.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-144",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-144.",
    "correct": "reachable"
  },
  {
    "id": "ENAUTO-145",
    "type": "dragdrop",
    "question": "[Genie parsers] Arrange the automation workflow in the correct order.",
    "options": [
      "Run CI tests",
      "Commit automation change",
      "Merge to main",
      "Create feature branch"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Genie parsers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-145."
  },
  {
    "id": "ENAUTO-146",
    "type": "single",
    "question": "[unit testing] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF"
  },
  {
    "id": "ENAUTO-147",
    "type": "multiple",
    "question": "[error handling] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-147."
  },
  {
    "id": "ENAUTO-148",
    "type": "fill",
    "question": "[idempotency] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-148.",
    "correct": [
      "get",
      "GET"
    "question": "[idempotency] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "retry",
      "RETRY"
    ]
  },
  {
    "id": "ENAUTO-149",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-149.",
    "c": [
      "unreachable",
      "UNREACHABLE"
    ]
  },
  {
    "id": "ENAUTO-150",
    "type": "dragdrop",
    "question": "[rollback strategy] Arrange the automation workflow in the correct order.",
    "options": [
      "Ingest stream",
      "Subscribe telemetry",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "correct": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-150."
  },
  {
    "id": "ENAUTO-151",
    "type": "single",
    "question": "[ACL automation] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-151."
  },
  {
    "id": "ENAUTO-152",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-152."
  },
  {
    "id": "ENAUTO-153",
    "type": "fill",
    "question": "[QoS policy deployment] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-153.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-154",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "active"
  },
  {
    "id": "ENAUTO-155",
    "type": "dragdrop",
    "question": "[OSPF health checks] Arrange the automation workflow in the correct order.",
    "options": [
      "Deploy change",
      "Render intended config",
      "Run dry validation",
      "Collect current state"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: OSPF health checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-155."
  },
  {
    "id": "ENAUTO-156",
    "type": "single",
    "question": "[device onboarding] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-156."
  },
  {
    "id": "ENAUTO-157",
    "type": "multiple",
    "question": "[certificate rotation] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-157."
  },
  {
    "id": "ENAUTO-158",
    "type": "fill",
    "question": "[AAA configuration] API scenario: You need to create a new telemetry subscription by sending JSON to /api/v1/subscriptions. Which HTTP method should you use?",
    "prompt": "Context: create a brand-new resource on the server. Answer with one lowercase HTTP method.",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-159",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-159.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "standby",
      "STANDBY"
    ]
  },
  {
    "id": "ENAUTO-160",
    "type": "dragdrop",
    "question": "[webhook triggers] Arrange the automation workflow in the correct order.",
    "options": [
      "Authenticate to API",
      "Validate response",
      "Request resource",
      "Persist result"
    ],
    "correct": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: webhook triggers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-160."
  },
  {
    "id": "ENAUTO-161",
    "type": "single",
    "question": "[NETCONF] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-161."
  },
  {
    "id": "ENAUTO-162",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-162."
  },
  {
    "id": "ENAUTO-163",
    "type": "fill",
    "question": "[YANG models] API scenario: You must fully replace policy object policy-ENAUTO-163 at /api/v1/policies/policy-ENAUTO-163 with a complete payload. Which HTTP method should you use?",
    "prompt": "Context: full replacement of an existing resource representation. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-164",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-164.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-165",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order.",
    "options": [
      "Verify post-checks",
      "Filter target devices",
      "Load inventory",
      "Execute playbook"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ]
  },
  {
    "id": "ENAUTO-166",
    "type": "single",
    "question": "[Webex API] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-166."
    "correct": "NETCONF"
  },
  {
    "id": "ENAUTO-167",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-167."
  },
  {
    "id": "ENAUTO-168",
    "type": "fill",
    "question": "[Python requests] API scenario: You only need to change the description field on /api/v1/interfaces/GigabitEthernet1/2. Which HTTP method should you use?",
    "prompt": "Context: partial update of an existing resource. Answer with one lowercase HTTP method.",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-169",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-169.",
    "c": [
      "down",
      "DOWN"
    ]
  },
  {
    "id": "ENAUTO-170",
    "type": "dragdrop",
    "question": "[Ansible playbooks] Arrange the automation workflow in the correct order.",
    "options": [
      "Commit automation change",
      "Merge to main",
      "Create feature branch",
      "Run CI tests"
    ],
    "correct": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Ansible playbooks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-170."
    ]
  },
  {
    "id": "ENAUTO-171",
    "type": "single",
    "question": "[GitOps workflow] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-171."
    "c": "NETCONF"
  },
  {
    "id": "ENAUTO-172",
    "type": "multiple",
    "question": "[CI/CD pipeline] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-172."
  },
  {
    "id": "ENAUTO-173",
    "type": "fill",
    "question": "[OAuth2 tokens] API scenario: You need to remove stale subscription sub-ENAUTO-173 at /api/v1/subscriptions/sub-ENAUTO-173. Which HTTP method should you use?",
    "prompt": "Context: delete/remove an existing resource. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-174",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-174.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-175",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order.",
    "options": [
      "Ingest stream",
      "Evaluate threshold",
      "Subscribe telemetry",
      "Trigger webhook"
    ],
    "c": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-175."
  },
  {
    "id": "ENAUTO-176",
    "type": "single",
    "question": "[YAML inventory] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-176."
  },
  {
    "id": "ENAUTO-177",
    "type": "multiple",
    "question": "[NTP sync] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-177."
    ]
  },
  {
    "id": "ENAUTO-178",
    "type": "fill",
    "question": "[SNMP telemetry] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-178.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-179",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-179.",
    "c": [
      "failed",
      "FAILED"
    ]
  },
  {
    "id": "ENAUTO-180",
    "type": "dragdrop",
    "question": "[model-driven telemetry] Arrange the automation workflow in the correct order.",
    "options": [
      "Render intended config",
      "Deploy change",
      "Collect current state",
      "Run dry validation"
    ],
    "correct": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: model-driven telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-180."
  },
  {
    "id": "ENAUTO-181",
    "type": "single",
    "question": "[EEM applets] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF"
  },
  {
    "id": "ENAUTO-182",
    "type": "multiple",
    "question": "[IOS XE guestshell] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-182."
  },
  {
    "id": "ENAUTO-183",
    "type": "fill",
    "question": "[on-box Python] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-183.",
    "c": [
      "get",
      "GET"
    ]
    "question": "[on-box Python] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "c": "yaml"
  },
  {
    "id": "ENAUTO-184",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-184.",
    "correct": "reachable"
  },
  {
    "id": "ENAUTO-185",
    "type": "dragdrop",
    "question": "[Genie parsers] Arrange the automation workflow in the correct order.",
    "options": [
      "Authenticate to API",
      "Validate response",
      "Request resource",
      "Persist result"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Genie parsers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-185."
  },
  {
    "id": "ENAUTO-186",
    "type": "single",
    "question": "[unit testing] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-186."
  },
  {
    "id": "ENAUTO-187",
    "type": "multiple",
    "question": "[error handling] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-187."
  },
  {
    "id": "ENAUTO-188",
    "type": "fill",
    "question": "[idempotency] API scenario: You need to read interface telemetry for device edge-rtr-4 from /api/v1/devices/edge-rtr-4/telemetry and must not modify server state. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method.",
    "correct": [
      "token",
      "TOKEN"
    ]
  },
  {
    "id": "ENAUTO-189",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-189.",
    "c": [
      "unreachable",
      "UNREACHABLE"
    ]
  },
  {
    "id": "ENAUTO-190",
    "type": "dragdrop",
    "question": "[rollback strategy] Arrange the automation workflow in the correct order.",
    "options": [
      "Execute playbook",
      "Filter target devices",
      "Verify post-checks",
      "Load inventory"
    ],
    "correct": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-190."
  },
  {
    "id": "ENAUTO-191",
    "type": "single",
    "question": "[ACL automation] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-191."
    "c": "NETCONF"
  },
  {
    "id": "ENAUTO-192",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "correct": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-192."
  },
  {
    "id": "ENAUTO-193",
    "type": "fill",
    "question": "[QoS policy deployment] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-193.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-194",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-194.",
    "correct": "active"
  },
  {
    "id": "ENAUTO-195",
    "type": "dragdrop",
    "question": "[OSPF health checks] Arrange the automation workflow in the correct order.",
    "options": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: OSPF health checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-195."
    ]
  },
  {
    "id": "ENAUTO-196",
    "type": "single",
    "question": "[device onboarding] Which protocol is primarily used for model-driven configuration over SSH in IOS XE?",
    "options": [
      "NETCONF",
      "SNMP",
      "TFTP",
      "Syslog"
    ],
    "correct": "NETCONF",
    "prompt": "Select one best answer. Scenario reference: ENAUTO-196."
    "correct": "NETCONF"
  },
  {
    "id": "ENAUTO-197",
    "type": "multiple",
    "question": "[certificate rotation] Select TWO methods commonly used for authentication to APIs.",
    "options": [
      "OAuth2 bearer tokens",
      "API keys",
      "Spanning Tree BPDU",
      "OSPF hello",
      "RIP updates"
    ],
    "c": [
      "OAuth2 bearer tokens",
      "API keys"
    ],
    "prompt": "Select all correct answers as indicated by the question. Scenario reference: ENAUTO-197."
  },
  {
    "id": "ENAUTO-198",
    "type": "fill",
    "question": "[AAA configuration] API scenario: You need to retrieve current interface statistics from /api/v1/interfaces/GigabitEthernet1/1/statistics without modifying anything. Which HTTP method should you use?",
    "prompt": "Context: read-only retrieval (no body update, no resource creation). Answer with one lowercase HTTP method. Scenario reference: ENAUTO-198.",
    "correct": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-199",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field. Scenario reference: ENAUTO-199.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
    "c": [
      "standby",
      "STANDBY"
    ]
  },
  {
    "id": "ENAUTO-200",
    "type": "dragdrop",
    "question": "[webhook triggers] Arrange the automation workflow in the correct order.",
    "options": [
      "Subscribe telemetry",
      "Evaluate threshold",
      "Trigger webhook",
      "Ingest stream"
    ],
    "correct": [
      "Subscribe telemetry",
      "Ingest stream",
      "Evaluate threshold",
      "Trigger webhook"
    ],
    "prompt": "Scenario: webhook triggers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once. Scenario reference: ENAUTO-200."
  }
];
