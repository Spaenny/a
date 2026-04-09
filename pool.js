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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-003",
    "type": "fill",
    "question": "[YANG models] You need to read the current resource state from IOS XE without changing anything. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "get"
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-008",
    "type": "fill",
    "question": "[Python requests] You need to create a new resource record on the controller/API endpoint. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-013",
    "type": "fill",
    "question": "[OAuth2 tokens] You must replace the full existing resource with a complete new representation. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "put"
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-018",
    "type": "fill",
    "question": "[SNMP telemetry] You only need to modify one or two fields on an existing resource. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-023",
    "type": "fill",
    "question": "[on-box Python] You must remove an existing resource from the API-managed inventory. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "delete"
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-028",
    "type": "fill",
    "question": "[idempotency] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "json",
      "JSON"
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-033",
    "type": "fill",
    "question": "[QoS policy deployment] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "yaml"
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-038",
    "type": "fill",
    "question": "[AAA configuration] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "token",
      "TOKEN"
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-043",
    "type": "fill",
    "question": "[YANG models] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "timeout"
  },
  {
    "id": "ENAUTO-044",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-048",
    "type": "fill",
    "question": "[Python requests] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "retry",
      "RETRY"
    ]
  },
  {
    "id": "ENAUTO-049",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-053",
    "type": "fill",
    "question": "[OAuth2 tokens] You need to read the current resource state from IOS XE without changing anything. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "get"
  },
  {
    "id": "ENAUTO-054",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-058",
    "type": "fill",
    "question": "[SNMP telemetry] You need to create a new resource record on the controller/API endpoint. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-059",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-063",
    "type": "fill",
    "question": "[on-box Python] You must replace the full existing resource with a complete new representation. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "put"
  },
  {
    "id": "ENAUTO-064",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-068",
    "type": "fill",
    "question": "[idempotency] You only need to modify one or two fields on an existing resource. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-069",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-073",
    "type": "fill",
    "question": "[QoS policy deployment] You must remove an existing resource from the API-managed inventory. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "delete"
  },
  {
    "id": "ENAUTO-074",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-078",
    "type": "fill",
    "question": "[AAA configuration] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "json",
      "JSON"
    ]
  },
  {
    "id": "ENAUTO-079",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-083",
    "type": "fill",
    "question": "[YANG models] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "yaml"
  },
  {
    "id": "ENAUTO-084",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-088",
    "type": "fill",
    "question": "[Python requests] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "token",
      "TOKEN"
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-093",
    "type": "fill",
    "question": "[OAuth2 tokens] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "timeout"
  },
  {
    "id": "ENAUTO-094",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"success\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-098",
    "type": "fill",
    "question": "[SNMP telemetry] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "retry",
      "RETRY"
    ]
  },
  {
    "id": "ENAUTO-099",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-103",
    "type": "fill",
    "question": "[on-box Python] You need to read the current resource state from IOS XE without changing anything. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "get"
  },
  {
    "id": "ENAUTO-104",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-108",
    "type": "fill",
    "question": "[idempotency] You need to create a new resource record on the controller/API endpoint. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-109",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    ]
  },
  {
    "id": "ENAUTO-113",
    "type": "fill",
    "question": "[QoS policy deployment] You must replace the full existing resource with a complete new representation. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "put"
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
    ]
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
    ]
  },
  {
    "id": "ENAUTO-118",
    "type": "fill",
    "question": "[AAA configuration] You only need to modify one or two fields on an existing resource. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-119",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog pipelines\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"standby\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    ]
  },
  {
    "id": "ENAUTO-123",
    "type": "fill",
    "question": "[YANG models] You must remove an existing resource from the API-managed inventory. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "delete"
  },
  {
    "id": "ENAUTO-124",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-128",
    "type": "fill",
    "question": "[Python requests] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "json",
      "JSON"
    ]
  },
  {
    "id": "ENAUTO-129",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "c": "NETCONF"
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
    "question": "[OAuth2 tokens] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "yaml"
  },
  {
    "id": "ENAUTO-134",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-138",
    "type": "fill",
    "question": "[SNMP telemetry] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "token",
      "TOKEN"
    ]
  },
  {
    "id": "ENAUTO-139",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-143",
    "type": "fill",
    "question": "[on-box Python] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "timeout"
  },
  {
    "id": "ENAUTO-144",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    ]
  },
  {
    "id": "ENAUTO-148",
    "type": "fill",
    "question": "[idempotency] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "retry",
      "RETRY"
    ]
  },
  {
    "id": "ENAUTO-149",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-153",
    "type": "fill",
    "question": "[QoS policy deployment] You need to read the current resource state from IOS XE without changing anything. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "get"
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-158",
    "type": "fill",
    "question": "[AAA configuration] You need to create a new resource record on the controller/API endpoint. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-159",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
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
    ]
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
    "c": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-163",
    "type": "fill",
    "question": "[YANG models] You must replace the full existing resource with a complete new representation. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "put"
  },
  {
    "id": "ENAUTO-164",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"up\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
  },
  {
    "id": "ENAUTO-168",
    "type": "fill",
    "question": "[Python requests] You only need to modify one or two fields on an existing resource. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-169",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"down\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
  },
  {
    "id": "ENAUTO-173",
    "type": "fill",
    "question": "[OAuth2 tokens] You must remove an existing resource from the API-managed inventory. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "delete"
  },
  {
    "id": "ENAUTO-174",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-178",
    "type": "fill",
    "question": "[SNMP telemetry] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "json",
      "JSON"
    ]
  },
  {
    "id": "ENAUTO-179",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"failed\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    ]
  },
  {
    "id": "ENAUTO-183",
    "type": "fill",
    "question": "[on-box Python] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "yaml"
  },
  {
    "id": "ENAUTO-184",
    "type": "lab",
    "question": "[pyATS] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"pyATS\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"reachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    "correct": "NETCONF"
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
    ]
  },
  {
    "id": "ENAUTO-188",
    "type": "fill",
    "question": "[idempotency] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "token",
      "TOKEN"
    ]
  },
  {
    "id": "ENAUTO-189",
    "type": "lab",
    "question": "[state validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"state validation\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"unreachable\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
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
    ]
  },
  {
    "id": "ENAUTO-193",
    "type": "fill",
    "question": "[QoS policy deployment] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "c": "timeout"
  },
  {
    "id": "ENAUTO-194",
    "type": "lab",
    "question": "[BGP neighbor checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP neighbor checks\",\n  \"device\": \"edge-rtr-1\",\n  \"status\": \"active\",\n  \"last_change\": \"2026-03-20T14:33:12Z\"\n}\nReturn the exact value of the \"status\" field.",
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
    ]
  },
  {
    "id": "ENAUTO-198",
    "type": "fill",
    "question": "[AAA configuration] Choose the correct HTTP method for this API action. Fill in the HTTP verb/keyword you should use.",
    "prompt": "Provide one lowercase HTTP method (for example: get, post, put, patch, delete).",
    "correct": [
      "retry",
      "RETRY"
    ]
  },
  {
    "id": "ENAUTO-199",
    "type": "lab",
    "question": "[Syslog pipelines] Determine the final device/service state from the JSON/API output below.",
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
    ]
  }
];
