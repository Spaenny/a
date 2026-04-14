// Curated 1000-question CCNP ENAUTO simulator pool
window.pool = [
  {
    "id": "ENAUTO-0001",
    "type": "single",
    "question": "[NETCONF] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 1)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0002",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO practices that improve API automation reliability. (Scenario 2)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0003",
    "type": "fill",
    "question": "[YANG models] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 3. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0004",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00004\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0005",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order. (Scenario 5)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
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
    "id": "ENAUTO-0006",
    "type": "single",
    "question": "[Ansible automation] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 6)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0007",
    "type": "multiple",
    "question": "[Python requests] Select TWO authentication approaches commonly used for API access. (Scenario 7)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0008",
    "type": "fill",
    "question": "[Jinja2 templates] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 8. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0009",
    "type": "lab",
    "question": "[GitOps pipeline] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"GitOps pipeline\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00009\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0010",
    "type": "dragdrop",
    "question": "[CI/CD workflow] Arrange the automation workflow in the correct order. (Scenario 10)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: CI/CD workflow change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0011",
    "type": "single",
    "question": "[OAuth2 token handling] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 11)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0012",
    "type": "multiple",
    "question": "[API rate limiting] Select TWO benefits of using source control for network automation code. (Scenario 12)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0013",
    "type": "fill",
    "question": "[JSON parsing] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 13. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0014",
    "type": "lab",
    "question": "[YAML inventory] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"YAML inventory\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00014\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0015",
    "type": "dragdrop",
    "question": "[NTP automation] Arrange the automation workflow in the correct order. (Scenario 15)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: NTP automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0016",
    "type": "single",
    "question": "[SNMP telemetry] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 16)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0017",
    "type": "multiple",
    "question": "[gNMI subscriptions] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 17)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0018",
    "type": "fill",
    "question": "[Model-driven telemetry] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 18. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0019",
    "type": "lab",
    "question": "[EEM automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"EEM automation\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00019\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0020",
    "type": "dragdrop",
    "question": "[IP SLA monitoring] Arrange the automation workflow in the correct order. (Scenario 20)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: IP SLA monitoring change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0021",
    "type": "single",
    "question": "[PyATS testing] Which status code indicates a successful REST API resource creation request? (Scenario 21)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0022",
    "type": "multiple",
    "question": "[Genie parsers] Select TWO signals that should trigger automated rollback logic. (Scenario 22)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0023",
    "type": "fill",
    "question": "[Webhook integrations] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 23. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0024",
    "type": "lab",
    "question": "[Kafka streaming] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Kafka streaming\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00024\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0025",
    "type": "dragdrop",
    "question": "[ThousandEyes API] Arrange the automation workflow in the correct order. (Scenario 25)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: ThousandEyes API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0026",
    "type": "single",
    "question": "[Meraki Dashboard API] What is the primary purpose of idempotency in network automation tasks? (Scenario 26)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0027",
    "type": "multiple",
    "question": "[Webex API] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 27)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0028",
    "type": "fill",
    "question": "[ACI REST API] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 28. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0029",
    "type": "lab",
    "question": "[NX-API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NX-API\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00029\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0030",
    "type": "dragdrop",
    "question": "[IOS XE programmability] Arrange the automation workflow in the correct order. (Scenario 30)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: IOS XE programmability change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0031",
    "type": "single",
    "question": "[Postman collections] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 31)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0032",
    "type": "multiple",
    "question": "[Terraform providers] Select TWO data modeling standards used frequently in network programmability. (Scenario 32)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0033",
    "type": "fill",
    "question": "[Puppet manifests] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 33. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0034",
    "type": "lab",
    "question": "[SaltStack states] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SaltStack states\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00034\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0035",
    "type": "dragdrop",
    "question": "[Event-driven automation] Arrange the automation workflow in the correct order. (Scenario 35)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Event-driven automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0036",
    "type": "single",
    "question": "[Message queues] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 36)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0037",
    "type": "multiple",
    "question": "[ServiceNow integration] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 37)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0038",
    "type": "fill",
    "question": "[ITSM workflows] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 38. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0039",
    "type": "lab",
    "question": "[Device onboarding] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Device onboarding\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00039\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0040",
    "type": "dragdrop",
    "question": "[Zero Touch Provisioning] Arrange the automation workflow in the correct order. (Scenario 40)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Zero Touch Provisioning change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0041",
    "type": "single",
    "question": "[Template versioning] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 41)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0042",
    "type": "multiple",
    "question": "[Config drift detection] Select TWO outputs useful for compliance evidence collection. (Scenario 42)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0043",
    "type": "fill",
    "question": "[Compliance auditing] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 43. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0044",
    "type": "lab",
    "question": "[Role-based access control] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Role-based access control\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00044\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0045",
    "type": "dragdrop",
    "question": "[AAA automation] Arrange the automation workflow in the correct order. (Scenario 45)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: AAA automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0046",
    "type": "single",
    "question": "[PKI certificate rotation] In CI/CD for network changes, what should run before deployment to production? (Scenario 46)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0047",
    "type": "multiple",
    "question": "[TLS profiles] Select TWO characteristics of well-designed automation runbooks. (Scenario 47)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0048",
    "type": "fill",
    "question": "[MFA API flow] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 48. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0049",
    "type": "lab",
    "question": "[Data serialization] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Data serialization\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00049\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0050",
    "type": "dragdrop",
    "question": "[XML payloads] Arrange the automation workflow in the correct order. (Scenario 50)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: XML payloads change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0051",
    "type": "single",
    "question": "[JSON schemas] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 51)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0052",
    "type": "multiple",
    "question": "[OpenAPI specs] Select TWO practices that improve API automation reliability. (Scenario 52)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0053",
    "type": "fill",
    "question": "[Async Python] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 53. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0054",
    "type": "lab",
    "question": "[Threading models] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Threading models\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00054\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0055",
    "type": "dragdrop",
    "question": "[Retry backoff logic] Arrange the automation workflow in the correct order. (Scenario 55)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Retry backoff logic change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0056",
    "type": "single",
    "question": "[Idempotency checks] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 56)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0057",
    "type": "multiple",
    "question": "[Unit testing] Select TWO authentication approaches commonly used for API access. (Scenario 57)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0058",
    "type": "fill",
    "question": "[Mock APIs] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 58. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0059",
    "type": "lab",
    "question": "[Logging pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Logging pipelines\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00059\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0060",
    "type": "dragdrop",
    "question": "[Observability metrics] Arrange the automation workflow in the correct order. (Scenario 60)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Observability metrics change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0061",
    "type": "single",
    "question": "[Prometheus exporters] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 61)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0062",
    "type": "multiple",
    "question": "[Grafana dashboards] Select TWO benefits of using source control for network automation code. (Scenario 62)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0063",
    "type": "fill",
    "question": "[Splunk HEC] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 63. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0064",
    "type": "lab",
    "question": "[Elastic ingestion] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Elastic ingestion\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00064\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0065",
    "type": "dragdrop",
    "question": "[Syslog normalization] Arrange the automation workflow in the correct order. (Scenario 65)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Syslog normalization change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0066",
    "type": "single",
    "question": "[Interface automation] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 66)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0067",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 67)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0068",
    "type": "fill",
    "question": "[VRF deployment] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 68. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0069",
    "type": "lab",
    "question": "[BGP policy automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP policy automation\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00069\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0070",
    "type": "dragdrop",
    "question": "[OSPF baseline checks] Arrange the automation workflow in the correct order. (Scenario 70)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: OSPF baseline checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0071",
    "type": "single",
    "question": "[QoS policy deployment] Which status code indicates a successful REST API resource creation request? (Scenario 71)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0072",
    "type": "multiple",
    "question": "[ACL lifecycle] Select TWO signals that should trigger automated rollback logic. (Scenario 72)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0073",
    "type": "fill",
    "question": "[NAT policy updates] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 73. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0074",
    "type": "lab",
    "question": "[DHCP operations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"DHCP operations\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00074\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0075",
    "type": "dragdrop",
    "question": "[DNS automation] Arrange the automation workflow in the correct order. (Scenario 75)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: DNS automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0076",
    "type": "single",
    "question": "[Wireless LAN automation] What is the primary purpose of idempotency in network automation tasks? (Scenario 76)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0077",
    "type": "multiple",
    "question": "[SD-WAN API orchestration] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 77)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0078",
    "type": "fill",
    "question": "[Campus fabric workflows] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 78. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0079",
    "type": "lab",
    "question": "[WAN assurance] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"WAN assurance\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00079\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0080",
    "type": "dragdrop",
    "question": "[Fault remediation] Arrange the automation workflow in the correct order. (Scenario 80)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Fault remediation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0081",
    "type": "single",
    "question": "[Incident enrichment] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 81)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0082",
    "type": "multiple",
    "question": "[Change approval gates] Select TWO data modeling standards used frequently in network programmability. (Scenario 82)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0083",
    "type": "fill",
    "question": "[Canary deployments] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 83. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0084",
    "type": "lab",
    "question": "[Blue-green rollout] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Blue-green rollout\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00084\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0085",
    "type": "dragdrop",
    "question": "[Rollback strategy] Arrange the automation workflow in the correct order. (Scenario 85)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0086",
    "type": "single",
    "question": "[Backup validation] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 86)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0087",
    "type": "multiple",
    "question": "[Golden config enforcement] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 87)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0088",
    "type": "fill",
    "question": "[Source-of-truth sync] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 88. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0089",
    "type": "lab",
    "question": "[NetBox integration] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NetBox integration\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00089\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0090",
    "type": "dragdrop",
    "question": "[IPAM workflows] Arrange the automation workflow in the correct order. (Scenario 90)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: IPAM workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0091",
    "type": "single",
    "question": "[Secrets management] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 91)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0092",
    "type": "multiple",
    "question": "[Vault integration] Select TWO outputs useful for compliance evidence collection. (Scenario 92)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0093",
    "type": "fill",
    "question": "[Token expiration handling] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 93. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0094",
    "type": "lab",
    "question": "[Pagination handling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Pagination handling\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00094\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0095",
    "type": "dragdrop",
    "question": "[Cursor-based APIs] Arrange the automation workflow in the correct order. (Scenario 95)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Cursor-based APIs change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0096",
    "type": "single",
    "question": "[Bulk endpoint operations] In CI/CD for network changes, what should run before deployment to production? (Scenario 96)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0097",
    "type": "multiple",
    "question": "[Streaming telemetry] Select TWO characteristics of well-designed automation runbooks. (Scenario 97)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0098",
    "type": "fill",
    "question": "[gRPC integrations] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 98. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0099",
    "type": "lab",
    "question": "[SSH key rotation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SSH key rotation\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00099\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0100",
    "type": "dragdrop",
    "question": "[Device health scoring] Arrange the automation workflow in the correct order. (Scenario 100)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Device health scoring change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0101",
    "type": "single",
    "question": "[SLA dashboards] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 101)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0102",
    "type": "multiple",
    "question": "[Cloud on-ramp automation] Select TWO practices that improve API automation reliability. (Scenario 102)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0103",
    "type": "fill",
    "question": "[Multicloud networking] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 103. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0104",
    "type": "lab",
    "question": "[Firewall policy as code] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Firewall policy as code\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00104\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0105",
    "type": "dragdrop",
    "question": "[Load balancer APIs] Arrange the automation workflow in the correct order. (Scenario 105)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Load balancer APIs change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0106",
    "type": "single",
    "question": "[Kubernetes networking] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 106)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0107",
    "type": "multiple",
    "question": "[Service mesh telemetry] Select TWO authentication approaches commonly used for API access. (Scenario 107)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0108",
    "type": "fill",
    "question": "[Endpoint profiling] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 108. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0109",
    "type": "lab",
    "question": "[NAC integrations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NAC integrations\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00109\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0110",
    "type": "dragdrop",
    "question": "[ISE pxGrid workflows] Arrange the automation workflow in the correct order. (Scenario 110)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: ISE pxGrid workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0111",
    "type": "single",
    "question": "[TrustSec tagging] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 111)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0112",
    "type": "multiple",
    "question": "[Segment routing telemetry] Select TWO benefits of using source control for network automation code. (Scenario 112)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0113",
    "type": "fill",
    "question": "[LISP control-plane API] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 113. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0114",
    "type": "lab",
    "question": "[Multicast automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Multicast automation\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00114\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0115",
    "type": "dragdrop",
    "question": "[MPLS VPN orchestration] Arrange the automation workflow in the correct order. (Scenario 115)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: MPLS VPN orchestration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0116",
    "type": "single",
    "question": "[EVPN automation] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 116)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0117",
    "type": "multiple",
    "question": "[VXLAN provisioning] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 117)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0118",
    "type": "fill",
    "question": "[Spine-leaf fabric validation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 118. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0119",
    "type": "lab",
    "question": "[Day-2 operations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Day-2 operations\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00119\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0120",
    "type": "dragdrop",
    "question": "[Drift remediation] Arrange the automation workflow in the correct order. (Scenario 120)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Drift remediation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0121",
    "type": "single",
    "question": "[Patch management automation] Which status code indicates a successful REST API resource creation request? (Scenario 121)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0122",
    "type": "multiple",
    "question": "[Inventory reconciliation] Select TWO signals that should trigger automated rollback logic. (Scenario 122)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0123",
    "type": "fill",
    "question": "[Compliance evidence export] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 123. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0124",
    "type": "lab",
    "question": "[Audit trail integrity] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Audit trail integrity\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00124\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0125",
    "type": "dragdrop",
    "question": "[Data retention policies] Arrange the automation workflow in the correct order. (Scenario 125)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Data retention policies change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0126",
    "type": "single",
    "question": "[Runbook automation] What is the primary purpose of idempotency in network automation tasks? (Scenario 126)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0127",
    "type": "multiple",
    "question": "[ChatOps approvals] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 127)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0128",
    "type": "fill",
    "question": "[Slack webhooks] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 128. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0129",
    "type": "lab",
    "question": "[Microsoft Teams bots] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Microsoft Teams bots\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00129\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0130",
    "type": "dragdrop",
    "question": "[Incident command workflows] Arrange the automation workflow in the correct order. (Scenario 130)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Incident command workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0131",
    "type": "single",
    "question": "[Business continuity tests] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 131)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0132",
    "type": "multiple",
    "question": "[Disaster recovery drills] Select TWO data modeling standards used frequently in network programmability. (Scenario 132)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0133",
    "type": "fill",
    "question": "[Performance baselining] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 133. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0134",
    "type": "lab",
    "question": "[Capacity forecasting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Capacity forecasting\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00134\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0135",
    "type": "dragdrop",
    "question": "[AIOps enrichment] Arrange the automation workflow in the correct order. (Scenario 135)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: AIOps enrichment change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0136",
    "type": "single",
    "question": "[Root-cause automation] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 136)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0137",
    "type": "multiple",
    "question": "[Synthetic testing] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 137)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0138",
    "type": "fill",
    "question": "[API gateway policies] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 138. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0139",
    "type": "lab",
    "question": "[Circuit breaker patterns] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Circuit breaker patterns\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00139\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0140",
    "type": "dragdrop",
    "question": "[Timeout strategy] Arrange the automation workflow in the correct order. (Scenario 140)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Timeout strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0141",
    "type": "single",
    "question": "[Schema validation] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 141)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0142",
    "type": "multiple",
    "question": "[NETCONF] Select TWO outputs useful for compliance evidence collection. (Scenario 142)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0143",
    "type": "fill",
    "question": "[RESTCONF] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 143. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0144",
    "type": "lab",
    "question": "[YANG models] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"YANG models\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00144\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0145",
    "type": "dragdrop",
    "question": "[Cisco DNA Center] Arrange the automation workflow in the correct order. (Scenario 145)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Cisco DNA Center change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0146",
    "type": "single",
    "question": "[Cisco NSO] In CI/CD for network changes, what should run before deployment to production? (Scenario 146)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0147",
    "type": "multiple",
    "question": "[Ansible automation] Select TWO characteristics of well-designed automation runbooks. (Scenario 147)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0148",
    "type": "fill",
    "question": "[Python requests] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 148. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0149",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00149\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0150",
    "type": "dragdrop",
    "question": "[GitOps pipeline] Arrange the automation workflow in the correct order. (Scenario 150)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: GitOps pipeline change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0151",
    "type": "single",
    "question": "[CI/CD workflow] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 151)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0152",
    "type": "multiple",
    "question": "[OAuth2 token handling] Select TWO practices that improve API automation reliability. (Scenario 152)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0153",
    "type": "fill",
    "question": "[API rate limiting] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 153. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0154",
    "type": "lab",
    "question": "[JSON parsing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"JSON parsing\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00154\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0155",
    "type": "dragdrop",
    "question": "[YAML inventory] Arrange the automation workflow in the correct order. (Scenario 155)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: YAML inventory change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0156",
    "type": "single",
    "question": "[NTP automation] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 156)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0157",
    "type": "multiple",
    "question": "[SNMP telemetry] Select TWO authentication approaches commonly used for API access. (Scenario 157)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0158",
    "type": "fill",
    "question": "[gNMI subscriptions] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 158. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0159",
    "type": "lab",
    "question": "[Model-driven telemetry] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Model-driven telemetry\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00159\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0160",
    "type": "dragdrop",
    "question": "[EEM automation] Arrange the automation workflow in the correct order. (Scenario 160)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: EEM automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0161",
    "type": "single",
    "question": "[IP SLA monitoring] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 161)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0162",
    "type": "multiple",
    "question": "[PyATS testing] Select TWO benefits of using source control for network automation code. (Scenario 162)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0163",
    "type": "fill",
    "question": "[Genie parsers] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 163. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0164",
    "type": "lab",
    "question": "[Webhook integrations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Webhook integrations\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00164\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0165",
    "type": "dragdrop",
    "question": "[Kafka streaming] Arrange the automation workflow in the correct order. (Scenario 165)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Kafka streaming change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0166",
    "type": "single",
    "question": "[ThousandEyes API] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 166)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0167",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 167)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0168",
    "type": "fill",
    "question": "[Webex API] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 168. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0169",
    "type": "lab",
    "question": "[ACI REST API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ACI REST API\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00169\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0170",
    "type": "dragdrop",
    "question": "[NX-API] Arrange the automation workflow in the correct order. (Scenario 170)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: NX-API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0171",
    "type": "single",
    "question": "[IOS XE programmability] Which status code indicates a successful REST API resource creation request? (Scenario 171)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0172",
    "type": "multiple",
    "question": "[Postman collections] Select TWO signals that should trigger automated rollback logic. (Scenario 172)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0173",
    "type": "fill",
    "question": "[Terraform providers] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 173. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0174",
    "type": "lab",
    "question": "[Puppet manifests] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Puppet manifests\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00174\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0175",
    "type": "dragdrop",
    "question": "[SaltStack states] Arrange the automation workflow in the correct order. (Scenario 175)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: SaltStack states change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0176",
    "type": "single",
    "question": "[Event-driven automation] What is the primary purpose of idempotency in network automation tasks? (Scenario 176)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0177",
    "type": "multiple",
    "question": "[Message queues] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 177)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0178",
    "type": "fill",
    "question": "[ServiceNow integration] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 178. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0179",
    "type": "lab",
    "question": "[ITSM workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ITSM workflows\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00179\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0180",
    "type": "dragdrop",
    "question": "[Device onboarding] Arrange the automation workflow in the correct order. (Scenario 180)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Device onboarding change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0181",
    "type": "single",
    "question": "[Zero Touch Provisioning] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 181)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0182",
    "type": "multiple",
    "question": "[Template versioning] Select TWO data modeling standards used frequently in network programmability. (Scenario 182)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0183",
    "type": "fill",
    "question": "[Config drift detection] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 183. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0184",
    "type": "lab",
    "question": "[Compliance auditing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Compliance auditing\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00184\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0185",
    "type": "dragdrop",
    "question": "[Role-based access control] Arrange the automation workflow in the correct order. (Scenario 185)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Role-based access control change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0186",
    "type": "single",
    "question": "[AAA automation] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 186)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0187",
    "type": "multiple",
    "question": "[PKI certificate rotation] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 187)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0188",
    "type": "fill",
    "question": "[TLS profiles] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 188. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0189",
    "type": "lab",
    "question": "[MFA API flow] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"MFA API flow\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00189\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0190",
    "type": "dragdrop",
    "question": "[Data serialization] Arrange the automation workflow in the correct order. (Scenario 190)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Data serialization change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0191",
    "type": "single",
    "question": "[XML payloads] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 191)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0192",
    "type": "multiple",
    "question": "[JSON schemas] Select TWO outputs useful for compliance evidence collection. (Scenario 192)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0193",
    "type": "fill",
    "question": "[OpenAPI specs] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 193. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0194",
    "type": "lab",
    "question": "[Async Python] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Async Python\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00194\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0195",
    "type": "dragdrop",
    "question": "[Threading models] Arrange the automation workflow in the correct order. (Scenario 195)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Threading models change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0196",
    "type": "single",
    "question": "[Retry backoff logic] In CI/CD for network changes, what should run before deployment to production? (Scenario 196)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0197",
    "type": "multiple",
    "question": "[Idempotency checks] Select TWO characteristics of well-designed automation runbooks. (Scenario 197)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0198",
    "type": "fill",
    "question": "[Unit testing] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 198. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0199",
    "type": "lab",
    "question": "[Mock APIs] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Mock APIs\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00199\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0200",
    "type": "dragdrop",
    "question": "[Logging pipelines] Arrange the automation workflow in the correct order. (Scenario 200)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Logging pipelines change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0201",
    "type": "single",
    "question": "[Observability metrics] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 201)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0202",
    "type": "multiple",
    "question": "[Prometheus exporters] Select TWO practices that improve API automation reliability. (Scenario 202)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0203",
    "type": "fill",
    "question": "[Grafana dashboards] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 203. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0204",
    "type": "lab",
    "question": "[Splunk HEC] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Splunk HEC\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00204\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0205",
    "type": "dragdrop",
    "question": "[Elastic ingestion] Arrange the automation workflow in the correct order. (Scenario 205)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Elastic ingestion change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0206",
    "type": "single",
    "question": "[Syslog normalization] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 206)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0207",
    "type": "multiple",
    "question": "[Interface automation] Select TWO authentication approaches commonly used for API access. (Scenario 207)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0208",
    "type": "fill",
    "question": "[VLAN provisioning] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 208. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0209",
    "type": "lab",
    "question": "[VRF deployment] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"VRF deployment\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00209\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0210",
    "type": "dragdrop",
    "question": "[BGP policy automation] Arrange the automation workflow in the correct order. (Scenario 210)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: BGP policy automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0211",
    "type": "single",
    "question": "[OSPF baseline checks] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 211)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0212",
    "type": "multiple",
    "question": "[QoS policy deployment] Select TWO benefits of using source control for network automation code. (Scenario 212)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0213",
    "type": "fill",
    "question": "[ACL lifecycle] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 213. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0214",
    "type": "lab",
    "question": "[NAT policy updates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NAT policy updates\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00214\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0215",
    "type": "dragdrop",
    "question": "[DHCP operations] Arrange the automation workflow in the correct order. (Scenario 215)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: DHCP operations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0216",
    "type": "single",
    "question": "[DNS automation] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 216)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0217",
    "type": "multiple",
    "question": "[Wireless LAN automation] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 217)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0218",
    "type": "fill",
    "question": "[SD-WAN API orchestration] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 218. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0219",
    "type": "lab",
    "question": "[Campus fabric workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Campus fabric workflows\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00219\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0220",
    "type": "dragdrop",
    "question": "[WAN assurance] Arrange the automation workflow in the correct order. (Scenario 220)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: WAN assurance change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0221",
    "type": "single",
    "question": "[Fault remediation] Which status code indicates a successful REST API resource creation request? (Scenario 221)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0222",
    "type": "multiple",
    "question": "[Incident enrichment] Select TWO signals that should trigger automated rollback logic. (Scenario 222)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0223",
    "type": "fill",
    "question": "[Change approval gates] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 223. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0224",
    "type": "lab",
    "question": "[Canary deployments] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Canary deployments\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00224\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0225",
    "type": "dragdrop",
    "question": "[Blue-green rollout] Arrange the automation workflow in the correct order. (Scenario 225)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Blue-green rollout change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0226",
    "type": "single",
    "question": "[Rollback strategy] What is the primary purpose of idempotency in network automation tasks? (Scenario 226)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0227",
    "type": "multiple",
    "question": "[Backup validation] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 227)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0228",
    "type": "fill",
    "question": "[Golden config enforcement] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 228. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0229",
    "type": "lab",
    "question": "[Source-of-truth sync] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Source-of-truth sync\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00229\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0230",
    "type": "dragdrop",
    "question": "[NetBox integration] Arrange the automation workflow in the correct order. (Scenario 230)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: NetBox integration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0231",
    "type": "single",
    "question": "[IPAM workflows] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 231)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0232",
    "type": "multiple",
    "question": "[Secrets management] Select TWO data modeling standards used frequently in network programmability. (Scenario 232)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0233",
    "type": "fill",
    "question": "[Vault integration] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 233. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0234",
    "type": "lab",
    "question": "[Token expiration handling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Token expiration handling\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00234\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0235",
    "type": "dragdrop",
    "question": "[Pagination handling] Arrange the automation workflow in the correct order. (Scenario 235)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Pagination handling change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0236",
    "type": "single",
    "question": "[Cursor-based APIs] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 236)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0237",
    "type": "multiple",
    "question": "[Bulk endpoint operations] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 237)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0238",
    "type": "fill",
    "question": "[Streaming telemetry] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 238. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0239",
    "type": "lab",
    "question": "[gRPC integrations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gRPC integrations\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00239\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0240",
    "type": "dragdrop",
    "question": "[SSH key rotation] Arrange the automation workflow in the correct order. (Scenario 240)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: SSH key rotation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0241",
    "type": "single",
    "question": "[Device health scoring] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 241)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0242",
    "type": "multiple",
    "question": "[SLA dashboards] Select TWO outputs useful for compliance evidence collection. (Scenario 242)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0243",
    "type": "fill",
    "question": "[Cloud on-ramp automation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 243. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0244",
    "type": "lab",
    "question": "[Multicloud networking] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Multicloud networking\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00244\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0245",
    "type": "dragdrop",
    "question": "[Firewall policy as code] Arrange the automation workflow in the correct order. (Scenario 245)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Firewall policy as code change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0246",
    "type": "single",
    "question": "[Load balancer APIs] In CI/CD for network changes, what should run before deployment to production? (Scenario 246)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0247",
    "type": "multiple",
    "question": "[Kubernetes networking] Select TWO characteristics of well-designed automation runbooks. (Scenario 247)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0248",
    "type": "fill",
    "question": "[Service mesh telemetry] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 248. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0249",
    "type": "lab",
    "question": "[Endpoint profiling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Endpoint profiling\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00249\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0250",
    "type": "dragdrop",
    "question": "[NAC integrations] Arrange the automation workflow in the correct order. (Scenario 250)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: NAC integrations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0251",
    "type": "single",
    "question": "[ISE pxGrid workflows] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 251)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0252",
    "type": "multiple",
    "question": "[TrustSec tagging] Select TWO practices that improve API automation reliability. (Scenario 252)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0253",
    "type": "fill",
    "question": "[Segment routing telemetry] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 253. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0254",
    "type": "lab",
    "question": "[LISP control-plane API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"LISP control-plane API\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00254\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0255",
    "type": "dragdrop",
    "question": "[Multicast automation] Arrange the automation workflow in the correct order. (Scenario 255)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Multicast automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0256",
    "type": "single",
    "question": "[MPLS VPN orchestration] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 256)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0257",
    "type": "multiple",
    "question": "[EVPN automation] Select TWO authentication approaches commonly used for API access. (Scenario 257)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0258",
    "type": "fill",
    "question": "[VXLAN provisioning] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 258. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0259",
    "type": "lab",
    "question": "[Spine-leaf fabric validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Spine-leaf fabric validation\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00259\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0260",
    "type": "dragdrop",
    "question": "[Day-2 operations] Arrange the automation workflow in the correct order. (Scenario 260)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Day-2 operations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0261",
    "type": "single",
    "question": "[Drift remediation] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 261)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0262",
    "type": "multiple",
    "question": "[Patch management automation] Select TWO benefits of using source control for network automation code. (Scenario 262)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0263",
    "type": "fill",
    "question": "[Inventory reconciliation] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 263. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0264",
    "type": "lab",
    "question": "[Compliance evidence export] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Compliance evidence export\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00264\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0265",
    "type": "dragdrop",
    "question": "[Audit trail integrity] Arrange the automation workflow in the correct order. (Scenario 265)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Audit trail integrity change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0266",
    "type": "single",
    "question": "[Data retention policies] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 266)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0267",
    "type": "multiple",
    "question": "[Runbook automation] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 267)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0268",
    "type": "fill",
    "question": "[ChatOps approvals] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 268. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0269",
    "type": "lab",
    "question": "[Slack webhooks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Slack webhooks\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00269\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0270",
    "type": "dragdrop",
    "question": "[Microsoft Teams bots] Arrange the automation workflow in the correct order. (Scenario 270)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Microsoft Teams bots change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0271",
    "type": "single",
    "question": "[Incident command workflows] Which status code indicates a successful REST API resource creation request? (Scenario 271)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0272",
    "type": "multiple",
    "question": "[Business continuity tests] Select TWO signals that should trigger automated rollback logic. (Scenario 272)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0273",
    "type": "fill",
    "question": "[Disaster recovery drills] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 273. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0274",
    "type": "lab",
    "question": "[Performance baselining] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Performance baselining\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00274\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0275",
    "type": "dragdrop",
    "question": "[Capacity forecasting] Arrange the automation workflow in the correct order. (Scenario 275)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Capacity forecasting change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0276",
    "type": "single",
    "question": "[AIOps enrichment] What is the primary purpose of idempotency in network automation tasks? (Scenario 276)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0277",
    "type": "multiple",
    "question": "[Root-cause automation] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 277)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0278",
    "type": "fill",
    "question": "[Synthetic testing] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 278. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0279",
    "type": "lab",
    "question": "[API gateway policies] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API gateway policies\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00279\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0280",
    "type": "dragdrop",
    "question": "[Circuit breaker patterns] Arrange the automation workflow in the correct order. (Scenario 280)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Circuit breaker patterns change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0281",
    "type": "single",
    "question": "[Timeout strategy] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 281)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0282",
    "type": "multiple",
    "question": "[Schema validation] Select TWO data modeling standards used frequently in network programmability. (Scenario 282)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0283",
    "type": "fill",
    "question": "[NETCONF] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 283. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0284",
    "type": "lab",
    "question": "[RESTCONF] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"RESTCONF\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00284\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0285",
    "type": "dragdrop",
    "question": "[YANG models] Arrange the automation workflow in the correct order. (Scenario 285)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: YANG models change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0286",
    "type": "single",
    "question": "[Cisco DNA Center] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 286)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0287",
    "type": "multiple",
    "question": "[Cisco NSO] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 287)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0288",
    "type": "fill",
    "question": "[Ansible automation] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 288. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0289",
    "type": "lab",
    "question": "[Python requests] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Python requests\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00289\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0290",
    "type": "dragdrop",
    "question": "[Jinja2 templates] Arrange the automation workflow in the correct order. (Scenario 290)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Jinja2 templates change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0291",
    "type": "single",
    "question": "[GitOps pipeline] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 291)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0292",
    "type": "multiple",
    "question": "[CI/CD workflow] Select TWO outputs useful for compliance evidence collection. (Scenario 292)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0293",
    "type": "fill",
    "question": "[OAuth2 token handling] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 293. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0294",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00294\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0295",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order. (Scenario 295)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0296",
    "type": "single",
    "question": "[YAML inventory] In CI/CD for network changes, what should run before deployment to production? (Scenario 296)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0297",
    "type": "multiple",
    "question": "[NTP automation] Select TWO characteristics of well-designed automation runbooks. (Scenario 297)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0298",
    "type": "fill",
    "question": "[SNMP telemetry] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 298. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0299",
    "type": "lab",
    "question": "[gNMI subscriptions] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gNMI subscriptions\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00299\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0300",
    "type": "dragdrop",
    "question": "[Model-driven telemetry] Arrange the automation workflow in the correct order. (Scenario 300)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Model-driven telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0301",
    "type": "single",
    "question": "[EEM automation] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 301)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0302",
    "type": "multiple",
    "question": "[IP SLA monitoring] Select TWO practices that improve API automation reliability. (Scenario 302)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0303",
    "type": "fill",
    "question": "[PyATS testing] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 303. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0304",
    "type": "lab",
    "question": "[Genie parsers] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Genie parsers\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00304\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0305",
    "type": "dragdrop",
    "question": "[Webhook integrations] Arrange the automation workflow in the correct order. (Scenario 305)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Webhook integrations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0306",
    "type": "single",
    "question": "[Kafka streaming] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 306)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0307",
    "type": "multiple",
    "question": "[ThousandEyes API] Select TWO authentication approaches commonly used for API access. (Scenario 307)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0308",
    "type": "fill",
    "question": "[Meraki Dashboard API] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 308. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0309",
    "type": "lab",
    "question": "[Webex API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Webex API\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00309\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0310",
    "type": "dragdrop",
    "question": "[ACI REST API] Arrange the automation workflow in the correct order. (Scenario 310)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: ACI REST API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0311",
    "type": "single",
    "question": "[NX-API] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 311)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0312",
    "type": "multiple",
    "question": "[IOS XE programmability] Select TWO benefits of using source control for network automation code. (Scenario 312)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0313",
    "type": "fill",
    "question": "[Postman collections] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 313. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0314",
    "type": "lab",
    "question": "[Terraform providers] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Terraform providers\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00314\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0315",
    "type": "dragdrop",
    "question": "[Puppet manifests] Arrange the automation workflow in the correct order. (Scenario 315)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Puppet manifests change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0316",
    "type": "single",
    "question": "[SaltStack states] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 316)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0317",
    "type": "multiple",
    "question": "[Event-driven automation] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 317)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0318",
    "type": "fill",
    "question": "[Message queues] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 318. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0319",
    "type": "lab",
    "question": "[ServiceNow integration] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ServiceNow integration\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00319\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0320",
    "type": "dragdrop",
    "question": "[ITSM workflows] Arrange the automation workflow in the correct order. (Scenario 320)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: ITSM workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0321",
    "type": "single",
    "question": "[Device onboarding] Which status code indicates a successful REST API resource creation request? (Scenario 321)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0322",
    "type": "multiple",
    "question": "[Zero Touch Provisioning] Select TWO signals that should trigger automated rollback logic. (Scenario 322)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0323",
    "type": "fill",
    "question": "[Template versioning] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 323. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0324",
    "type": "lab",
    "question": "[Config drift detection] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Config drift detection\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00324\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0325",
    "type": "dragdrop",
    "question": "[Compliance auditing] Arrange the automation workflow in the correct order. (Scenario 325)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Compliance auditing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0326",
    "type": "single",
    "question": "[Role-based access control] What is the primary purpose of idempotency in network automation tasks? (Scenario 326)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0327",
    "type": "multiple",
    "question": "[AAA automation] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 327)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0328",
    "type": "fill",
    "question": "[PKI certificate rotation] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 328. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0329",
    "type": "lab",
    "question": "[TLS profiles] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"TLS profiles\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00329\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0330",
    "type": "dragdrop",
    "question": "[MFA API flow] Arrange the automation workflow in the correct order. (Scenario 330)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: MFA API flow change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0331",
    "type": "single",
    "question": "[Data serialization] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 331)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0332",
    "type": "multiple",
    "question": "[XML payloads] Select TWO data modeling standards used frequently in network programmability. (Scenario 332)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0333",
    "type": "fill",
    "question": "[JSON schemas] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 333. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0334",
    "type": "lab",
    "question": "[OpenAPI specs] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"OpenAPI specs\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00334\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0335",
    "type": "dragdrop",
    "question": "[Async Python] Arrange the automation workflow in the correct order. (Scenario 335)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Async Python change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0336",
    "type": "single",
    "question": "[Threading models] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 336)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0337",
    "type": "multiple",
    "question": "[Retry backoff logic] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 337)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0338",
    "type": "fill",
    "question": "[Idempotency checks] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 338. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0339",
    "type": "lab",
    "question": "[Unit testing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Unit testing\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00339\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0340",
    "type": "dragdrop",
    "question": "[Mock APIs] Arrange the automation workflow in the correct order. (Scenario 340)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Mock APIs change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0341",
    "type": "single",
    "question": "[Logging pipelines] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 341)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0342",
    "type": "multiple",
    "question": "[Observability metrics] Select TWO outputs useful for compliance evidence collection. (Scenario 342)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0343",
    "type": "fill",
    "question": "[Prometheus exporters] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 343. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0344",
    "type": "lab",
    "question": "[Grafana dashboards] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Grafana dashboards\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00344\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0345",
    "type": "dragdrop",
    "question": "[Splunk HEC] Arrange the automation workflow in the correct order. (Scenario 345)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Splunk HEC change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0346",
    "type": "single",
    "question": "[Elastic ingestion] In CI/CD for network changes, what should run before deployment to production? (Scenario 346)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0347",
    "type": "multiple",
    "question": "[Syslog normalization] Select TWO characteristics of well-designed automation runbooks. (Scenario 347)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0348",
    "type": "fill",
    "question": "[Interface automation] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 348. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0349",
    "type": "lab",
    "question": "[VLAN provisioning] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"VLAN provisioning\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00349\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0350",
    "type": "dragdrop",
    "question": "[VRF deployment] Arrange the automation workflow in the correct order. (Scenario 350)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: VRF deployment change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0351",
    "type": "single",
    "question": "[BGP policy automation] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 351)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0352",
    "type": "multiple",
    "question": "[OSPF baseline checks] Select TWO practices that improve API automation reliability. (Scenario 352)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0353",
    "type": "fill",
    "question": "[QoS policy deployment] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 353. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0354",
    "type": "lab",
    "question": "[ACL lifecycle] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ACL lifecycle\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00354\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0355",
    "type": "dragdrop",
    "question": "[NAT policy updates] Arrange the automation workflow in the correct order. (Scenario 355)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: NAT policy updates change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0356",
    "type": "single",
    "question": "[DHCP operations] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 356)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0357",
    "type": "multiple",
    "question": "[DNS automation] Select TWO authentication approaches commonly used for API access. (Scenario 357)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0358",
    "type": "fill",
    "question": "[Wireless LAN automation] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 358. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0359",
    "type": "lab",
    "question": "[SD-WAN API orchestration] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SD-WAN API orchestration\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00359\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0360",
    "type": "dragdrop",
    "question": "[Campus fabric workflows] Arrange the automation workflow in the correct order. (Scenario 360)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Campus fabric workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0361",
    "type": "single",
    "question": "[WAN assurance] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 361)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0362",
    "type": "multiple",
    "question": "[Fault remediation] Select TWO benefits of using source control for network automation code. (Scenario 362)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0363",
    "type": "fill",
    "question": "[Incident enrichment] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 363. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0364",
    "type": "lab",
    "question": "[Change approval gates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Change approval gates\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00364\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0365",
    "type": "dragdrop",
    "question": "[Canary deployments] Arrange the automation workflow in the correct order. (Scenario 365)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Canary deployments change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0366",
    "type": "single",
    "question": "[Blue-green rollout] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 366)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0367",
    "type": "multiple",
    "question": "[Rollback strategy] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 367)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0368",
    "type": "fill",
    "question": "[Backup validation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 368. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0369",
    "type": "lab",
    "question": "[Golden config enforcement] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Golden config enforcement\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00369\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0370",
    "type": "dragdrop",
    "question": "[Source-of-truth sync] Arrange the automation workflow in the correct order. (Scenario 370)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Source-of-truth sync change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0371",
    "type": "single",
    "question": "[NetBox integration] Which status code indicates a successful REST API resource creation request? (Scenario 371)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0372",
    "type": "multiple",
    "question": "[IPAM workflows] Select TWO signals that should trigger automated rollback logic. (Scenario 372)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0373",
    "type": "fill",
    "question": "[Secrets management] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 373. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0374",
    "type": "lab",
    "question": "[Vault integration] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Vault integration\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00374\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0375",
    "type": "dragdrop",
    "question": "[Token expiration handling] Arrange the automation workflow in the correct order. (Scenario 375)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Token expiration handling change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0376",
    "type": "single",
    "question": "[Pagination handling] What is the primary purpose of idempotency in network automation tasks? (Scenario 376)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0377",
    "type": "multiple",
    "question": "[Cursor-based APIs] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 377)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0378",
    "type": "fill",
    "question": "[Bulk endpoint operations] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 378. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0379",
    "type": "lab",
    "question": "[Streaming telemetry] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Streaming telemetry\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00379\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0380",
    "type": "dragdrop",
    "question": "[gRPC integrations] Arrange the automation workflow in the correct order. (Scenario 380)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: gRPC integrations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0381",
    "type": "single",
    "question": "[SSH key rotation] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 381)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0382",
    "type": "multiple",
    "question": "[Device health scoring] Select TWO data modeling standards used frequently in network programmability. (Scenario 382)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0383",
    "type": "fill",
    "question": "[SLA dashboards] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 383. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0384",
    "type": "lab",
    "question": "[Cloud on-ramp automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cloud on-ramp automation\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00384\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0385",
    "type": "dragdrop",
    "question": "[Multicloud networking] Arrange the automation workflow in the correct order. (Scenario 385)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Multicloud networking change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0386",
    "type": "single",
    "question": "[Firewall policy as code] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 386)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0387",
    "type": "multiple",
    "question": "[Load balancer APIs] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 387)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0388",
    "type": "fill",
    "question": "[Kubernetes networking] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 388. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0389",
    "type": "lab",
    "question": "[Service mesh telemetry] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Service mesh telemetry\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00389\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0390",
    "type": "dragdrop",
    "question": "[Endpoint profiling] Arrange the automation workflow in the correct order. (Scenario 390)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Endpoint profiling change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0391",
    "type": "single",
    "question": "[NAC integrations] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 391)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0392",
    "type": "multiple",
    "question": "[ISE pxGrid workflows] Select TWO outputs useful for compliance evidence collection. (Scenario 392)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0393",
    "type": "fill",
    "question": "[TrustSec tagging] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 393. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0394",
    "type": "lab",
    "question": "[Segment routing telemetry] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Segment routing telemetry\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00394\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0395",
    "type": "dragdrop",
    "question": "[LISP control-plane API] Arrange the automation workflow in the correct order. (Scenario 395)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: LISP control-plane API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0396",
    "type": "single",
    "question": "[Multicast automation] In CI/CD for network changes, what should run before deployment to production? (Scenario 396)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0397",
    "type": "multiple",
    "question": "[MPLS VPN orchestration] Select TWO characteristics of well-designed automation runbooks. (Scenario 397)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0398",
    "type": "fill",
    "question": "[EVPN automation] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 398. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0399",
    "type": "lab",
    "question": "[VXLAN provisioning] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"VXLAN provisioning\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00399\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0400",
    "type": "dragdrop",
    "question": "[Spine-leaf fabric validation] Arrange the automation workflow in the correct order. (Scenario 400)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Spine-leaf fabric validation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0401",
    "type": "single",
    "question": "[Day-2 operations] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 401)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0402",
    "type": "multiple",
    "question": "[Drift remediation] Select TWO practices that improve API automation reliability. (Scenario 402)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0403",
    "type": "fill",
    "question": "[Patch management automation] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 403. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0404",
    "type": "lab",
    "question": "[Inventory reconciliation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Inventory reconciliation\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00404\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0405",
    "type": "dragdrop",
    "question": "[Compliance evidence export] Arrange the automation workflow in the correct order. (Scenario 405)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Compliance evidence export change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0406",
    "type": "single",
    "question": "[Audit trail integrity] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 406)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0407",
    "type": "multiple",
    "question": "[Data retention policies] Select TWO authentication approaches commonly used for API access. (Scenario 407)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0408",
    "type": "fill",
    "question": "[Runbook automation] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 408. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0409",
    "type": "lab",
    "question": "[ChatOps approvals] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ChatOps approvals\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00409\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0410",
    "type": "dragdrop",
    "question": "[Slack webhooks] Arrange the automation workflow in the correct order. (Scenario 410)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Slack webhooks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0411",
    "type": "single",
    "question": "[Microsoft Teams bots] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 411)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0412",
    "type": "multiple",
    "question": "[Incident command workflows] Select TWO benefits of using source control for network automation code. (Scenario 412)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0413",
    "type": "fill",
    "question": "[Business continuity tests] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 413. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0414",
    "type": "lab",
    "question": "[Disaster recovery drills] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Disaster recovery drills\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00414\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0415",
    "type": "dragdrop",
    "question": "[Performance baselining] Arrange the automation workflow in the correct order. (Scenario 415)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Performance baselining change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0416",
    "type": "single",
    "question": "[Capacity forecasting] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 416)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0417",
    "type": "multiple",
    "question": "[AIOps enrichment] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 417)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0418",
    "type": "fill",
    "question": "[Root-cause automation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 418. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0419",
    "type": "lab",
    "question": "[Synthetic testing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Synthetic testing\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00419\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0420",
    "type": "dragdrop",
    "question": "[API gateway policies] Arrange the automation workflow in the correct order. (Scenario 420)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: API gateway policies change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0421",
    "type": "single",
    "question": "[Circuit breaker patterns] Which status code indicates a successful REST API resource creation request? (Scenario 421)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0422",
    "type": "multiple",
    "question": "[Timeout strategy] Select TWO signals that should trigger automated rollback logic. (Scenario 422)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0423",
    "type": "fill",
    "question": "[Schema validation] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 423. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0424",
    "type": "lab",
    "question": "[NETCONF] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NETCONF\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00424\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0425",
    "type": "dragdrop",
    "question": "[RESTCONF] Arrange the automation workflow in the correct order. (Scenario 425)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: RESTCONF change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0426",
    "type": "single",
    "question": "[YANG models] What is the primary purpose of idempotency in network automation tasks? (Scenario 426)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0427",
    "type": "multiple",
    "question": "[Cisco DNA Center] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 427)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0428",
    "type": "fill",
    "question": "[Cisco NSO] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 428. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0429",
    "type": "lab",
    "question": "[Ansible automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Ansible automation\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00429\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0430",
    "type": "dragdrop",
    "question": "[Python requests] Arrange the automation workflow in the correct order. (Scenario 430)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Python requests change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0431",
    "type": "single",
    "question": "[Jinja2 templates] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 431)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0432",
    "type": "multiple",
    "question": "[GitOps pipeline] Select TWO data modeling standards used frequently in network programmability. (Scenario 432)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0433",
    "type": "fill",
    "question": "[CI/CD workflow] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 433. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0434",
    "type": "lab",
    "question": "[OAuth2 token handling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"OAuth2 token handling\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00434\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0435",
    "type": "dragdrop",
    "question": "[API rate limiting] Arrange the automation workflow in the correct order. (Scenario 435)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: API rate limiting change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0436",
    "type": "single",
    "question": "[JSON parsing] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 436)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0437",
    "type": "multiple",
    "question": "[YAML inventory] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 437)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0438",
    "type": "fill",
    "question": "[NTP automation] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 438. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0439",
    "type": "lab",
    "question": "[SNMP telemetry] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SNMP telemetry\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00439\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0440",
    "type": "dragdrop",
    "question": "[gNMI subscriptions] Arrange the automation workflow in the correct order. (Scenario 440)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: gNMI subscriptions change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0441",
    "type": "single",
    "question": "[Model-driven telemetry] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 441)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0442",
    "type": "multiple",
    "question": "[EEM automation] Select TWO outputs useful for compliance evidence collection. (Scenario 442)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0443",
    "type": "fill",
    "question": "[IP SLA monitoring] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 443. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0444",
    "type": "lab",
    "question": "[PyATS testing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"PyATS testing\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00444\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0445",
    "type": "dragdrop",
    "question": "[Genie parsers] Arrange the automation workflow in the correct order. (Scenario 445)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Genie parsers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0446",
    "type": "single",
    "question": "[Webhook integrations] In CI/CD for network changes, what should run before deployment to production? (Scenario 446)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0447",
    "type": "multiple",
    "question": "[Kafka streaming] Select TWO characteristics of well-designed automation runbooks. (Scenario 447)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0448",
    "type": "fill",
    "question": "[ThousandEyes API] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 448. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0449",
    "type": "lab",
    "question": "[Meraki Dashboard API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Meraki Dashboard API\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00449\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0450",
    "type": "dragdrop",
    "question": "[Webex API] Arrange the automation workflow in the correct order. (Scenario 450)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Webex API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0451",
    "type": "single",
    "question": "[ACI REST API] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 451)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0452",
    "type": "multiple",
    "question": "[NX-API] Select TWO practices that improve API automation reliability. (Scenario 452)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0453",
    "type": "fill",
    "question": "[IOS XE programmability] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 453. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0454",
    "type": "lab",
    "question": "[Postman collections] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Postman collections\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00454\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0455",
    "type": "dragdrop",
    "question": "[Terraform providers] Arrange the automation workflow in the correct order. (Scenario 455)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Terraform providers change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0456",
    "type": "single",
    "question": "[Puppet manifests] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 456)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0457",
    "type": "multiple",
    "question": "[SaltStack states] Select TWO authentication approaches commonly used for API access. (Scenario 457)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0458",
    "type": "fill",
    "question": "[Event-driven automation] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 458. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0459",
    "type": "lab",
    "question": "[Message queues] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Message queues\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00459\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0460",
    "type": "dragdrop",
    "question": "[ServiceNow integration] Arrange the automation workflow in the correct order. (Scenario 460)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: ServiceNow integration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0461",
    "type": "single",
    "question": "[ITSM workflows] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 461)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0462",
    "type": "multiple",
    "question": "[Device onboarding] Select TWO benefits of using source control for network automation code. (Scenario 462)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0463",
    "type": "fill",
    "question": "[Zero Touch Provisioning] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 463. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0464",
    "type": "lab",
    "question": "[Template versioning] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Template versioning\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00464\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0465",
    "type": "dragdrop",
    "question": "[Config drift detection] Arrange the automation workflow in the correct order. (Scenario 465)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Config drift detection change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0466",
    "type": "single",
    "question": "[Compliance auditing] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 466)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0467",
    "type": "multiple",
    "question": "[Role-based access control] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 467)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0468",
    "type": "fill",
    "question": "[AAA automation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 468. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0469",
    "type": "lab",
    "question": "[PKI certificate rotation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"PKI certificate rotation\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00469\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0470",
    "type": "dragdrop",
    "question": "[TLS profiles] Arrange the automation workflow in the correct order. (Scenario 470)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: TLS profiles change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0471",
    "type": "single",
    "question": "[MFA API flow] Which status code indicates a successful REST API resource creation request? (Scenario 471)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0472",
    "type": "multiple",
    "question": "[Data serialization] Select TWO signals that should trigger automated rollback logic. (Scenario 472)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0473",
    "type": "fill",
    "question": "[XML payloads] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 473. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0474",
    "type": "lab",
    "question": "[JSON schemas] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"JSON schemas\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00474\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0475",
    "type": "dragdrop",
    "question": "[OpenAPI specs] Arrange the automation workflow in the correct order. (Scenario 475)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: OpenAPI specs change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0476",
    "type": "single",
    "question": "[Async Python] What is the primary purpose of idempotency in network automation tasks? (Scenario 476)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0477",
    "type": "multiple",
    "question": "[Threading models] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 477)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0478",
    "type": "fill",
    "question": "[Retry backoff logic] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 478. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0479",
    "type": "lab",
    "question": "[Idempotency checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Idempotency checks\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00479\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0480",
    "type": "dragdrop",
    "question": "[Unit testing] Arrange the automation workflow in the correct order. (Scenario 480)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Unit testing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0481",
    "type": "single",
    "question": "[Mock APIs] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 481)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0482",
    "type": "multiple",
    "question": "[Logging pipelines] Select TWO data modeling standards used frequently in network programmability. (Scenario 482)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0483",
    "type": "fill",
    "question": "[Observability metrics] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 483. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0484",
    "type": "lab",
    "question": "[Prometheus exporters] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Prometheus exporters\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00484\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0485",
    "type": "dragdrop",
    "question": "[Grafana dashboards] Arrange the automation workflow in the correct order. (Scenario 485)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Grafana dashboards change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0486",
    "type": "single",
    "question": "[Splunk HEC] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 486)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0487",
    "type": "multiple",
    "question": "[Elastic ingestion] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 487)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0488",
    "type": "fill",
    "question": "[Syslog normalization] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 488. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0489",
    "type": "lab",
    "question": "[Interface automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Interface automation\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00489\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0490",
    "type": "dragdrop",
    "question": "[VLAN provisioning] Arrange the automation workflow in the correct order. (Scenario 490)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: VLAN provisioning change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0491",
    "type": "single",
    "question": "[VRF deployment] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 491)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0492",
    "type": "multiple",
    "question": "[BGP policy automation] Select TWO outputs useful for compliance evidence collection. (Scenario 492)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0493",
    "type": "fill",
    "question": "[OSPF baseline checks] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 493. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0494",
    "type": "lab",
    "question": "[QoS policy deployment] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"QoS policy deployment\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00494\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0495",
    "type": "dragdrop",
    "question": "[ACL lifecycle] Arrange the automation workflow in the correct order. (Scenario 495)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: ACL lifecycle change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0496",
    "type": "single",
    "question": "[NAT policy updates] In CI/CD for network changes, what should run before deployment to production? (Scenario 496)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0497",
    "type": "multiple",
    "question": "[DHCP operations] Select TWO characteristics of well-designed automation runbooks. (Scenario 497)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0498",
    "type": "fill",
    "question": "[DNS automation] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 498. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0499",
    "type": "lab",
    "question": "[Wireless LAN automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Wireless LAN automation\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00499\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0500",
    "type": "dragdrop",
    "question": "[SD-WAN API orchestration] Arrange the automation workflow in the correct order. (Scenario 500)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: SD-WAN API orchestration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0501",
    "type": "single",
    "question": "[Campus fabric workflows] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 501)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0502",
    "type": "multiple",
    "question": "[WAN assurance] Select TWO practices that improve API automation reliability. (Scenario 502)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0503",
    "type": "fill",
    "question": "[Fault remediation] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 503. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0504",
    "type": "lab",
    "question": "[Incident enrichment] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Incident enrichment\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00504\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0505",
    "type": "dragdrop",
    "question": "[Change approval gates] Arrange the automation workflow in the correct order. (Scenario 505)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Change approval gates change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0506",
    "type": "single",
    "question": "[Canary deployments] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 506)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0507",
    "type": "multiple",
    "question": "[Blue-green rollout] Select TWO authentication approaches commonly used for API access. (Scenario 507)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0508",
    "type": "fill",
    "question": "[Rollback strategy] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 508. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0509",
    "type": "lab",
    "question": "[Backup validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Backup validation\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00509\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0510",
    "type": "dragdrop",
    "question": "[Golden config enforcement] Arrange the automation workflow in the correct order. (Scenario 510)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Golden config enforcement change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0511",
    "type": "single",
    "question": "[Source-of-truth sync] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 511)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0512",
    "type": "multiple",
    "question": "[NetBox integration] Select TWO benefits of using source control for network automation code. (Scenario 512)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0513",
    "type": "fill",
    "question": "[IPAM workflows] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 513. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0514",
    "type": "lab",
    "question": "[Secrets management] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Secrets management\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00514\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0515",
    "type": "dragdrop",
    "question": "[Vault integration] Arrange the automation workflow in the correct order. (Scenario 515)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Vault integration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0516",
    "type": "single",
    "question": "[Token expiration handling] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 516)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0517",
    "type": "multiple",
    "question": "[Pagination handling] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 517)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0518",
    "type": "fill",
    "question": "[Cursor-based APIs] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 518. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0519",
    "type": "lab",
    "question": "[Bulk endpoint operations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Bulk endpoint operations\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00519\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0520",
    "type": "dragdrop",
    "question": "[Streaming telemetry] Arrange the automation workflow in the correct order. (Scenario 520)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Streaming telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0521",
    "type": "single",
    "question": "[gRPC integrations] Which status code indicates a successful REST API resource creation request? (Scenario 521)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0522",
    "type": "multiple",
    "question": "[SSH key rotation] Select TWO signals that should trigger automated rollback logic. (Scenario 522)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0523",
    "type": "fill",
    "question": "[Device health scoring] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 523. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0524",
    "type": "lab",
    "question": "[SLA dashboards] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SLA dashboards\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00524\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0525",
    "type": "dragdrop",
    "question": "[Cloud on-ramp automation] Arrange the automation workflow in the correct order. (Scenario 525)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Cloud on-ramp automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0526",
    "type": "single",
    "question": "[Multicloud networking] What is the primary purpose of idempotency in network automation tasks? (Scenario 526)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0527",
    "type": "multiple",
    "question": "[Firewall policy as code] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 527)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0528",
    "type": "fill",
    "question": "[Load balancer APIs] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 528. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0529",
    "type": "lab",
    "question": "[Kubernetes networking] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Kubernetes networking\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00529\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0530",
    "type": "dragdrop",
    "question": "[Service mesh telemetry] Arrange the automation workflow in the correct order. (Scenario 530)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Service mesh telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0531",
    "type": "single",
    "question": "[Endpoint profiling] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 531)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0532",
    "type": "multiple",
    "question": "[NAC integrations] Select TWO data modeling standards used frequently in network programmability. (Scenario 532)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0533",
    "type": "fill",
    "question": "[ISE pxGrid workflows] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 533. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0534",
    "type": "lab",
    "question": "[TrustSec tagging] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"TrustSec tagging\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00534\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0535",
    "type": "dragdrop",
    "question": "[Segment routing telemetry] Arrange the automation workflow in the correct order. (Scenario 535)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Segment routing telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0536",
    "type": "single",
    "question": "[LISP control-plane API] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 536)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0537",
    "type": "multiple",
    "question": "[Multicast automation] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 537)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0538",
    "type": "fill",
    "question": "[MPLS VPN orchestration] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 538. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0539",
    "type": "lab",
    "question": "[EVPN automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"EVPN automation\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00539\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0540",
    "type": "dragdrop",
    "question": "[VXLAN provisioning] Arrange the automation workflow in the correct order. (Scenario 540)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: VXLAN provisioning change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0541",
    "type": "single",
    "question": "[Spine-leaf fabric validation] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 541)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0542",
    "type": "multiple",
    "question": "[Day-2 operations] Select TWO outputs useful for compliance evidence collection. (Scenario 542)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0543",
    "type": "fill",
    "question": "[Drift remediation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 543. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0544",
    "type": "lab",
    "question": "[Patch management automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Patch management automation\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00544\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0545",
    "type": "dragdrop",
    "question": "[Inventory reconciliation] Arrange the automation workflow in the correct order. (Scenario 545)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Inventory reconciliation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0546",
    "type": "single",
    "question": "[Compliance evidence export] In CI/CD for network changes, what should run before deployment to production? (Scenario 546)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0547",
    "type": "multiple",
    "question": "[Audit trail integrity] Select TWO characteristics of well-designed automation runbooks. (Scenario 547)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0548",
    "type": "fill",
    "question": "[Data retention policies] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 548. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0549",
    "type": "lab",
    "question": "[Runbook automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Runbook automation\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00549\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0550",
    "type": "dragdrop",
    "question": "[ChatOps approvals] Arrange the automation workflow in the correct order. (Scenario 550)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: ChatOps approvals change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0551",
    "type": "single",
    "question": "[Slack webhooks] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 551)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0552",
    "type": "multiple",
    "question": "[Microsoft Teams bots] Select TWO practices that improve API automation reliability. (Scenario 552)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0553",
    "type": "fill",
    "question": "[Incident command workflows] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 553. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0554",
    "type": "lab",
    "question": "[Business continuity tests] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Business continuity tests\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00554\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0555",
    "type": "dragdrop",
    "question": "[Disaster recovery drills] Arrange the automation workflow in the correct order. (Scenario 555)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Disaster recovery drills change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0556",
    "type": "single",
    "question": "[Performance baselining] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 556)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0557",
    "type": "multiple",
    "question": "[Capacity forecasting] Select TWO authentication approaches commonly used for API access. (Scenario 557)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0558",
    "type": "fill",
    "question": "[AIOps enrichment] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 558. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0559",
    "type": "lab",
    "question": "[Root-cause automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Root-cause automation\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00559\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0560",
    "type": "dragdrop",
    "question": "[Synthetic testing] Arrange the automation workflow in the correct order. (Scenario 560)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Synthetic testing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0561",
    "type": "single",
    "question": "[API gateway policies] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 561)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0562",
    "type": "multiple",
    "question": "[Circuit breaker patterns] Select TWO benefits of using source control for network automation code. (Scenario 562)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0563",
    "type": "fill",
    "question": "[Timeout strategy] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 563. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0564",
    "type": "lab",
    "question": "[Schema validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Schema validation\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00564\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0565",
    "type": "dragdrop",
    "question": "[NETCONF] Arrange the automation workflow in the correct order. (Scenario 565)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: NETCONF change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0566",
    "type": "single",
    "question": "[RESTCONF] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 566)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0567",
    "type": "multiple",
    "question": "[YANG models] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 567)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0568",
    "type": "fill",
    "question": "[Cisco DNA Center] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 568. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0569",
    "type": "lab",
    "question": "[Cisco NSO] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco NSO\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00569\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0570",
    "type": "dragdrop",
    "question": "[Ansible automation] Arrange the automation workflow in the correct order. (Scenario 570)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Ansible automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0571",
    "type": "single",
    "question": "[Python requests] Which status code indicates a successful REST API resource creation request? (Scenario 571)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0572",
    "type": "multiple",
    "question": "[Jinja2 templates] Select TWO signals that should trigger automated rollback logic. (Scenario 572)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0573",
    "type": "fill",
    "question": "[GitOps pipeline] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 573. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0574",
    "type": "lab",
    "question": "[CI/CD workflow] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"CI/CD workflow\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00574\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0575",
    "type": "dragdrop",
    "question": "[OAuth2 token handling] Arrange the automation workflow in the correct order. (Scenario 575)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: OAuth2 token handling change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0576",
    "type": "single",
    "question": "[API rate limiting] What is the primary purpose of idempotency in network automation tasks? (Scenario 576)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0577",
    "type": "multiple",
    "question": "[JSON parsing] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 577)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0578",
    "type": "fill",
    "question": "[YAML inventory] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 578. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0579",
    "type": "lab",
    "question": "[NTP automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NTP automation\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00579\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0580",
    "type": "dragdrop",
    "question": "[SNMP telemetry] Arrange the automation workflow in the correct order. (Scenario 580)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: SNMP telemetry change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0581",
    "type": "single",
    "question": "[gNMI subscriptions] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 581)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0582",
    "type": "multiple",
    "question": "[Model-driven telemetry] Select TWO data modeling standards used frequently in network programmability. (Scenario 582)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0583",
    "type": "fill",
    "question": "[EEM automation] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 583. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0584",
    "type": "lab",
    "question": "[IP SLA monitoring] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"IP SLA monitoring\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00584\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0585",
    "type": "dragdrop",
    "question": "[PyATS testing] Arrange the automation workflow in the correct order. (Scenario 585)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: PyATS testing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0586",
    "type": "single",
    "question": "[Genie parsers] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 586)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0587",
    "type": "multiple",
    "question": "[Webhook integrations] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 587)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0588",
    "type": "fill",
    "question": "[Kafka streaming] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 588. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0589",
    "type": "lab",
    "question": "[ThousandEyes API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ThousandEyes API\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00589\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0590",
    "type": "dragdrop",
    "question": "[Meraki Dashboard API] Arrange the automation workflow in the correct order. (Scenario 590)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Meraki Dashboard API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0591",
    "type": "single",
    "question": "[Webex API] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 591)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0592",
    "type": "multiple",
    "question": "[ACI REST API] Select TWO outputs useful for compliance evidence collection. (Scenario 592)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0593",
    "type": "fill",
    "question": "[NX-API] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 593. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0594",
    "type": "lab",
    "question": "[IOS XE programmability] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"IOS XE programmability\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00594\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0595",
    "type": "dragdrop",
    "question": "[Postman collections] Arrange the automation workflow in the correct order. (Scenario 595)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Postman collections change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0596",
    "type": "single",
    "question": "[Terraform providers] In CI/CD for network changes, what should run before deployment to production? (Scenario 596)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0597",
    "type": "multiple",
    "question": "[Puppet manifests] Select TWO characteristics of well-designed automation runbooks. (Scenario 597)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0598",
    "type": "fill",
    "question": "[SaltStack states] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 598. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0599",
    "type": "lab",
    "question": "[Event-driven automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Event-driven automation\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00599\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0600",
    "type": "dragdrop",
    "question": "[Message queues] Arrange the automation workflow in the correct order. (Scenario 600)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Message queues change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0601",
    "type": "single",
    "question": "[ServiceNow integration] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 601)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0602",
    "type": "multiple",
    "question": "[ITSM workflows] Select TWO practices that improve API automation reliability. (Scenario 602)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0603",
    "type": "fill",
    "question": "[Device onboarding] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 603. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0604",
    "type": "lab",
    "question": "[Zero Touch Provisioning] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Zero Touch Provisioning\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00604\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0605",
    "type": "dragdrop",
    "question": "[Template versioning] Arrange the automation workflow in the correct order. (Scenario 605)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Template versioning change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0606",
    "type": "single",
    "question": "[Config drift detection] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 606)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0607",
    "type": "multiple",
    "question": "[Compliance auditing] Select TWO authentication approaches commonly used for API access. (Scenario 607)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0608",
    "type": "fill",
    "question": "[Role-based access control] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 608. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0609",
    "type": "lab",
    "question": "[AAA automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"AAA automation\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00609\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0610",
    "type": "dragdrop",
    "question": "[PKI certificate rotation] Arrange the automation workflow in the correct order. (Scenario 610)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: PKI certificate rotation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0611",
    "type": "single",
    "question": "[TLS profiles] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 611)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0612",
    "type": "multiple",
    "question": "[MFA API flow] Select TWO benefits of using source control for network automation code. (Scenario 612)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0613",
    "type": "fill",
    "question": "[Data serialization] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 613. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0614",
    "type": "lab",
    "question": "[XML payloads] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"XML payloads\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00614\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0615",
    "type": "dragdrop",
    "question": "[JSON schemas] Arrange the automation workflow in the correct order. (Scenario 615)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: JSON schemas change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0616",
    "type": "single",
    "question": "[OpenAPI specs] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 616)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0617",
    "type": "multiple",
    "question": "[Async Python] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 617)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0618",
    "type": "fill",
    "question": "[Threading models] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 618. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0619",
    "type": "lab",
    "question": "[Retry backoff logic] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Retry backoff logic\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00619\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0620",
    "type": "dragdrop",
    "question": "[Idempotency checks] Arrange the automation workflow in the correct order. (Scenario 620)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Idempotency checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0621",
    "type": "single",
    "question": "[Unit testing] Which status code indicates a successful REST API resource creation request? (Scenario 621)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0622",
    "type": "multiple",
    "question": "[Mock APIs] Select TWO signals that should trigger automated rollback logic. (Scenario 622)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0623",
    "type": "fill",
    "question": "[Logging pipelines] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 623. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0624",
    "type": "lab",
    "question": "[Observability metrics] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Observability metrics\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00624\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0625",
    "type": "dragdrop",
    "question": "[Prometheus exporters] Arrange the automation workflow in the correct order. (Scenario 625)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Prometheus exporters change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0626",
    "type": "single",
    "question": "[Grafana dashboards] What is the primary purpose of idempotency in network automation tasks? (Scenario 626)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0627",
    "type": "multiple",
    "question": "[Splunk HEC] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 627)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0628",
    "type": "fill",
    "question": "[Elastic ingestion] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 628. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0629",
    "type": "lab",
    "question": "[Syslog normalization] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Syslog normalization\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00629\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0630",
    "type": "dragdrop",
    "question": "[Interface automation] Arrange the automation workflow in the correct order. (Scenario 630)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Interface automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0631",
    "type": "single",
    "question": "[VLAN provisioning] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 631)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0632",
    "type": "multiple",
    "question": "[VRF deployment] Select TWO data modeling standards used frequently in network programmability. (Scenario 632)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0633",
    "type": "fill",
    "question": "[BGP policy automation] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 633. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0634",
    "type": "lab",
    "question": "[OSPF baseline checks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"OSPF baseline checks\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00634\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0635",
    "type": "dragdrop",
    "question": "[QoS policy deployment] Arrange the automation workflow in the correct order. (Scenario 635)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: QoS policy deployment change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0636",
    "type": "single",
    "question": "[ACL lifecycle] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 636)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0637",
    "type": "multiple",
    "question": "[NAT policy updates] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 637)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0638",
    "type": "fill",
    "question": "[DHCP operations] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 638. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0639",
    "type": "lab",
    "question": "[DNS automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"DNS automation\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00639\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0640",
    "type": "dragdrop",
    "question": "[Wireless LAN automation] Arrange the automation workflow in the correct order. (Scenario 640)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Wireless LAN automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0641",
    "type": "single",
    "question": "[SD-WAN API orchestration] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 641)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0642",
    "type": "multiple",
    "question": "[Campus fabric workflows] Select TWO outputs useful for compliance evidence collection. (Scenario 642)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0643",
    "type": "fill",
    "question": "[WAN assurance] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 643. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0644",
    "type": "lab",
    "question": "[Fault remediation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Fault remediation\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00644\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0645",
    "type": "dragdrop",
    "question": "[Incident enrichment] Arrange the automation workflow in the correct order. (Scenario 645)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Incident enrichment change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0646",
    "type": "single",
    "question": "[Change approval gates] In CI/CD for network changes, what should run before deployment to production? (Scenario 646)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0647",
    "type": "multiple",
    "question": "[Canary deployments] Select TWO characteristics of well-designed automation runbooks. (Scenario 647)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0648",
    "type": "fill",
    "question": "[Blue-green rollout] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 648. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0649",
    "type": "lab",
    "question": "[Rollback strategy] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Rollback strategy\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00649\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0650",
    "type": "dragdrop",
    "question": "[Backup validation] Arrange the automation workflow in the correct order. (Scenario 650)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Backup validation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0651",
    "type": "single",
    "question": "[Golden config enforcement] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 651)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0652",
    "type": "multiple",
    "question": "[Source-of-truth sync] Select TWO practices that improve API automation reliability. (Scenario 652)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0653",
    "type": "fill",
    "question": "[NetBox integration] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 653. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0654",
    "type": "lab",
    "question": "[IPAM workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"IPAM workflows\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00654\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0655",
    "type": "dragdrop",
    "question": "[Secrets management] Arrange the automation workflow in the correct order. (Scenario 655)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Secrets management change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0656",
    "type": "single",
    "question": "[Vault integration] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 656)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0657",
    "type": "multiple",
    "question": "[Token expiration handling] Select TWO authentication approaches commonly used for API access. (Scenario 657)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0658",
    "type": "fill",
    "question": "[Pagination handling] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 658. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0659",
    "type": "lab",
    "question": "[Cursor-based APIs] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cursor-based APIs\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00659\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0660",
    "type": "dragdrop",
    "question": "[Bulk endpoint operations] Arrange the automation workflow in the correct order. (Scenario 660)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Bulk endpoint operations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0661",
    "type": "single",
    "question": "[Streaming telemetry] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 661)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0662",
    "type": "multiple",
    "question": "[gRPC integrations] Select TWO benefits of using source control for network automation code. (Scenario 662)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0663",
    "type": "fill",
    "question": "[SSH key rotation] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 663. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0664",
    "type": "lab",
    "question": "[Device health scoring] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Device health scoring\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00664\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0665",
    "type": "dragdrop",
    "question": "[SLA dashboards] Arrange the automation workflow in the correct order. (Scenario 665)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: SLA dashboards change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0666",
    "type": "single",
    "question": "[Cloud on-ramp automation] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 666)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0667",
    "type": "multiple",
    "question": "[Multicloud networking] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 667)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0668",
    "type": "fill",
    "question": "[Firewall policy as code] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 668. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0669",
    "type": "lab",
    "question": "[Load balancer APIs] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Load balancer APIs\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00669\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0670",
    "type": "dragdrop",
    "question": "[Kubernetes networking] Arrange the automation workflow in the correct order. (Scenario 670)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Kubernetes networking change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0671",
    "type": "single",
    "question": "[Service mesh telemetry] Which status code indicates a successful REST API resource creation request? (Scenario 671)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0672",
    "type": "multiple",
    "question": "[Endpoint profiling] Select TWO signals that should trigger automated rollback logic. (Scenario 672)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0673",
    "type": "fill",
    "question": "[NAC integrations] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 673. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0674",
    "type": "lab",
    "question": "[ISE pxGrid workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ISE pxGrid workflows\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00674\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0675",
    "type": "dragdrop",
    "question": "[TrustSec tagging] Arrange the automation workflow in the correct order. (Scenario 675)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: TrustSec tagging change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0676",
    "type": "single",
    "question": "[Segment routing telemetry] What is the primary purpose of idempotency in network automation tasks? (Scenario 676)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0677",
    "type": "multiple",
    "question": "[LISP control-plane API] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 677)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0678",
    "type": "fill",
    "question": "[Multicast automation] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 678. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0679",
    "type": "lab",
    "question": "[MPLS VPN orchestration] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"MPLS VPN orchestration\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00679\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0680",
    "type": "dragdrop",
    "question": "[EVPN automation] Arrange the automation workflow in the correct order. (Scenario 680)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: EVPN automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0681",
    "type": "single",
    "question": "[VXLAN provisioning] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 681)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0682",
    "type": "multiple",
    "question": "[Spine-leaf fabric validation] Select TWO data modeling standards used frequently in network programmability. (Scenario 682)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0683",
    "type": "fill",
    "question": "[Day-2 operations] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 683. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0684",
    "type": "lab",
    "question": "[Drift remediation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Drift remediation\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00684\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0685",
    "type": "dragdrop",
    "question": "[Patch management automation] Arrange the automation workflow in the correct order. (Scenario 685)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Patch management automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0686",
    "type": "single",
    "question": "[Inventory reconciliation] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 686)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0687",
    "type": "multiple",
    "question": "[Compliance evidence export] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 687)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0688",
    "type": "fill",
    "question": "[Audit trail integrity] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 688. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0689",
    "type": "lab",
    "question": "[Data retention policies] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Data retention policies\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00689\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0690",
    "type": "dragdrop",
    "question": "[Runbook automation] Arrange the automation workflow in the correct order. (Scenario 690)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Runbook automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0691",
    "type": "single",
    "question": "[ChatOps approvals] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 691)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0692",
    "type": "multiple",
    "question": "[Slack webhooks] Select TWO outputs useful for compliance evidence collection. (Scenario 692)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0693",
    "type": "fill",
    "question": "[Microsoft Teams bots] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 693. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0694",
    "type": "lab",
    "question": "[Incident command workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Incident command workflows\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00694\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0695",
    "type": "dragdrop",
    "question": "[Business continuity tests] Arrange the automation workflow in the correct order. (Scenario 695)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Business continuity tests change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0696",
    "type": "single",
    "question": "[Disaster recovery drills] In CI/CD for network changes, what should run before deployment to production? (Scenario 696)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0697",
    "type": "multiple",
    "question": "[Performance baselining] Select TWO characteristics of well-designed automation runbooks. (Scenario 697)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0698",
    "type": "fill",
    "question": "[Capacity forecasting] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 698. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0699",
    "type": "lab",
    "question": "[AIOps enrichment] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"AIOps enrichment\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00699\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0700",
    "type": "dragdrop",
    "question": "[Root-cause automation] Arrange the automation workflow in the correct order. (Scenario 700)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Root-cause automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0701",
    "type": "single",
    "question": "[Synthetic testing] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 701)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0702",
    "type": "multiple",
    "question": "[API gateway policies] Select TWO practices that improve API automation reliability. (Scenario 702)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0703",
    "type": "fill",
    "question": "[Circuit breaker patterns] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 703. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0704",
    "type": "lab",
    "question": "[Timeout strategy] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Timeout strategy\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00704\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0705",
    "type": "dragdrop",
    "question": "[Schema validation] Arrange the automation workflow in the correct order. (Scenario 705)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Schema validation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0706",
    "type": "single",
    "question": "[NETCONF] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 706)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0707",
    "type": "multiple",
    "question": "[RESTCONF] Select TWO authentication approaches commonly used for API access. (Scenario 707)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0708",
    "type": "fill",
    "question": "[YANG models] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 708. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0709",
    "type": "lab",
    "question": "[Cisco DNA Center] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Cisco DNA Center\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00709\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0710",
    "type": "dragdrop",
    "question": "[Cisco NSO] Arrange the automation workflow in the correct order. (Scenario 710)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Cisco NSO change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0711",
    "type": "single",
    "question": "[Ansible automation] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 711)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0712",
    "type": "multiple",
    "question": "[Python requests] Select TWO benefits of using source control for network automation code. (Scenario 712)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0713",
    "type": "fill",
    "question": "[Jinja2 templates] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 713. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0714",
    "type": "lab",
    "question": "[GitOps pipeline] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"GitOps pipeline\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00714\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0715",
    "type": "dragdrop",
    "question": "[CI/CD workflow] Arrange the automation workflow in the correct order. (Scenario 715)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: CI/CD workflow change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0716",
    "type": "single",
    "question": "[OAuth2 token handling] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 716)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0717",
    "type": "multiple",
    "question": "[API rate limiting] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 717)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0718",
    "type": "fill",
    "question": "[JSON parsing] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 718. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0719",
    "type": "lab",
    "question": "[YAML inventory] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"YAML inventory\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00719\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0720",
    "type": "dragdrop",
    "question": "[NTP automation] Arrange the automation workflow in the correct order. (Scenario 720)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: NTP automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0721",
    "type": "single",
    "question": "[SNMP telemetry] Which status code indicates a successful REST API resource creation request? (Scenario 721)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0722",
    "type": "multiple",
    "question": "[gNMI subscriptions] Select TWO signals that should trigger automated rollback logic. (Scenario 722)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0723",
    "type": "fill",
    "question": "[Model-driven telemetry] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 723. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0724",
    "type": "lab",
    "question": "[EEM automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"EEM automation\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00724\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0725",
    "type": "dragdrop",
    "question": "[IP SLA monitoring] Arrange the automation workflow in the correct order. (Scenario 725)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: IP SLA monitoring change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0726",
    "type": "single",
    "question": "[PyATS testing] What is the primary purpose of idempotency in network automation tasks? (Scenario 726)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0727",
    "type": "multiple",
    "question": "[Genie parsers] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 727)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0728",
    "type": "fill",
    "question": "[Webhook integrations] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 728. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0729",
    "type": "lab",
    "question": "[Kafka streaming] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Kafka streaming\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00729\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0730",
    "type": "dragdrop",
    "question": "[ThousandEyes API] Arrange the automation workflow in the correct order. (Scenario 730)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: ThousandEyes API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0731",
    "type": "single",
    "question": "[Meraki Dashboard API] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 731)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0732",
    "type": "multiple",
    "question": "[Webex API] Select TWO data modeling standards used frequently in network programmability. (Scenario 732)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0733",
    "type": "fill",
    "question": "[ACI REST API] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 733. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0734",
    "type": "lab",
    "question": "[NX-API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NX-API\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00734\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0735",
    "type": "dragdrop",
    "question": "[IOS XE programmability] Arrange the automation workflow in the correct order. (Scenario 735)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: IOS XE programmability change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0736",
    "type": "single",
    "question": "[Postman collections] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 736)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0737",
    "type": "multiple",
    "question": "[Terraform providers] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 737)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0738",
    "type": "fill",
    "question": "[Puppet manifests] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 738. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0739",
    "type": "lab",
    "question": "[SaltStack states] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SaltStack states\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00739\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0740",
    "type": "dragdrop",
    "question": "[Event-driven automation] Arrange the automation workflow in the correct order. (Scenario 740)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Event-driven automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0741",
    "type": "single",
    "question": "[Message queues] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 741)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0742",
    "type": "multiple",
    "question": "[ServiceNow integration] Select TWO outputs useful for compliance evidence collection. (Scenario 742)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0743",
    "type": "fill",
    "question": "[ITSM workflows] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 743. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0744",
    "type": "lab",
    "question": "[Device onboarding] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Device onboarding\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00744\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0745",
    "type": "dragdrop",
    "question": "[Zero Touch Provisioning] Arrange the automation workflow in the correct order. (Scenario 745)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Zero Touch Provisioning change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0746",
    "type": "single",
    "question": "[Template versioning] In CI/CD for network changes, what should run before deployment to production? (Scenario 746)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0747",
    "type": "multiple",
    "question": "[Config drift detection] Select TWO characteristics of well-designed automation runbooks. (Scenario 747)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0748",
    "type": "fill",
    "question": "[Compliance auditing] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 748. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0749",
    "type": "lab",
    "question": "[Role-based access control] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Role-based access control\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00749\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0750",
    "type": "dragdrop",
    "question": "[AAA automation] Arrange the automation workflow in the correct order. (Scenario 750)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: AAA automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0751",
    "type": "single",
    "question": "[PKI certificate rotation] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 751)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0752",
    "type": "multiple",
    "question": "[TLS profiles] Select TWO practices that improve API automation reliability. (Scenario 752)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0753",
    "type": "fill",
    "question": "[MFA API flow] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 753. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0754",
    "type": "lab",
    "question": "[Data serialization] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Data serialization\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00754\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0755",
    "type": "dragdrop",
    "question": "[XML payloads] Arrange the automation workflow in the correct order. (Scenario 755)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: XML payloads change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0756",
    "type": "single",
    "question": "[JSON schemas] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 756)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0757",
    "type": "multiple",
    "question": "[OpenAPI specs] Select TWO authentication approaches commonly used for API access. (Scenario 757)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0758",
    "type": "fill",
    "question": "[Async Python] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 758. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0759",
    "type": "lab",
    "question": "[Threading models] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Threading models\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00759\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0760",
    "type": "dragdrop",
    "question": "[Retry backoff logic] Arrange the automation workflow in the correct order. (Scenario 760)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Retry backoff logic change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0761",
    "type": "single",
    "question": "[Idempotency checks] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 761)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0762",
    "type": "multiple",
    "question": "[Unit testing] Select TWO benefits of using source control for network automation code. (Scenario 762)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0763",
    "type": "fill",
    "question": "[Mock APIs] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 763. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0764",
    "type": "lab",
    "question": "[Logging pipelines] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Logging pipelines\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00764\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0765",
    "type": "dragdrop",
    "question": "[Observability metrics] Arrange the automation workflow in the correct order. (Scenario 765)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Observability metrics change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0766",
    "type": "single",
    "question": "[Prometheus exporters] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 766)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0767",
    "type": "multiple",
    "question": "[Grafana dashboards] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 767)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0768",
    "type": "fill",
    "question": "[Splunk HEC] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 768. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0769",
    "type": "lab",
    "question": "[Elastic ingestion] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Elastic ingestion\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00769\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0770",
    "type": "dragdrop",
    "question": "[Syslog normalization] Arrange the automation workflow in the correct order. (Scenario 770)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Syslog normalization change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0771",
    "type": "single",
    "question": "[Interface automation] Which status code indicates a successful REST API resource creation request? (Scenario 771)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0772",
    "type": "multiple",
    "question": "[VLAN provisioning] Select TWO signals that should trigger automated rollback logic. (Scenario 772)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0773",
    "type": "fill",
    "question": "[VRF deployment] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 773. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0774",
    "type": "lab",
    "question": "[BGP policy automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"BGP policy automation\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00774\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0775",
    "type": "dragdrop",
    "question": "[OSPF baseline checks] Arrange the automation workflow in the correct order. (Scenario 775)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: OSPF baseline checks change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0776",
    "type": "single",
    "question": "[QoS policy deployment] What is the primary purpose of idempotency in network automation tasks? (Scenario 776)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0777",
    "type": "multiple",
    "question": "[ACL lifecycle] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 777)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0778",
    "type": "fill",
    "question": "[NAT policy updates] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 778. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0779",
    "type": "lab",
    "question": "[DHCP operations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"DHCP operations\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00779\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0780",
    "type": "dragdrop",
    "question": "[DNS automation] Arrange the automation workflow in the correct order. (Scenario 780)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: DNS automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0781",
    "type": "single",
    "question": "[Wireless LAN automation] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 781)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0782",
    "type": "multiple",
    "question": "[SD-WAN API orchestration] Select TWO data modeling standards used frequently in network programmability. (Scenario 782)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0783",
    "type": "fill",
    "question": "[Campus fabric workflows] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 783. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0784",
    "type": "lab",
    "question": "[WAN assurance] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"WAN assurance\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00784\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0785",
    "type": "dragdrop",
    "question": "[Fault remediation] Arrange the automation workflow in the correct order. (Scenario 785)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Fault remediation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0786",
    "type": "single",
    "question": "[Incident enrichment] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 786)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0787",
    "type": "multiple",
    "question": "[Change approval gates] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 787)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0788",
    "type": "fill",
    "question": "[Canary deployments] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 788. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0789",
    "type": "lab",
    "question": "[Blue-green rollout] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Blue-green rollout\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00789\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0790",
    "type": "dragdrop",
    "question": "[Rollback strategy] Arrange the automation workflow in the correct order. (Scenario 790)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Rollback strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0791",
    "type": "single",
    "question": "[Backup validation] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 791)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0792",
    "type": "multiple",
    "question": "[Golden config enforcement] Select TWO outputs useful for compliance evidence collection. (Scenario 792)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0793",
    "type": "fill",
    "question": "[Source-of-truth sync] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 793. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0794",
    "type": "lab",
    "question": "[NetBox integration] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NetBox integration\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00794\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0795",
    "type": "dragdrop",
    "question": "[IPAM workflows] Arrange the automation workflow in the correct order. (Scenario 795)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: IPAM workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0796",
    "type": "single",
    "question": "[Secrets management] In CI/CD for network changes, what should run before deployment to production? (Scenario 796)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0797",
    "type": "multiple",
    "question": "[Vault integration] Select TWO characteristics of well-designed automation runbooks. (Scenario 797)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0798",
    "type": "fill",
    "question": "[Token expiration handling] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 798. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0799",
    "type": "lab",
    "question": "[Pagination handling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Pagination handling\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00799\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0800",
    "type": "dragdrop",
    "question": "[Cursor-based APIs] Arrange the automation workflow in the correct order. (Scenario 800)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Cursor-based APIs change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0801",
    "type": "single",
    "question": "[Bulk endpoint operations] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 801)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0802",
    "type": "multiple",
    "question": "[Streaming telemetry] Select TWO practices that improve API automation reliability. (Scenario 802)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0803",
    "type": "fill",
    "question": "[gRPC integrations] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 803. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0804",
    "type": "lab",
    "question": "[SSH key rotation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"SSH key rotation\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00804\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0805",
    "type": "dragdrop",
    "question": "[Device health scoring] Arrange the automation workflow in the correct order. (Scenario 805)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Device health scoring change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0806",
    "type": "single",
    "question": "[SLA dashboards] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 806)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0807",
    "type": "multiple",
    "question": "[Cloud on-ramp automation] Select TWO authentication approaches commonly used for API access. (Scenario 807)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0808",
    "type": "fill",
    "question": "[Multicloud networking] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 808. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0809",
    "type": "lab",
    "question": "[Firewall policy as code] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Firewall policy as code\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00809\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0810",
    "type": "dragdrop",
    "question": "[Load balancer APIs] Arrange the automation workflow in the correct order. (Scenario 810)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Load balancer APIs change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0811",
    "type": "single",
    "question": "[Kubernetes networking] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 811)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0812",
    "type": "multiple",
    "question": "[Service mesh telemetry] Select TWO benefits of using source control for network automation code. (Scenario 812)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0813",
    "type": "fill",
    "question": "[Endpoint profiling] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 813. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0814",
    "type": "lab",
    "question": "[NAC integrations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NAC integrations\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00814\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0815",
    "type": "dragdrop",
    "question": "[ISE pxGrid workflows] Arrange the automation workflow in the correct order. (Scenario 815)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: ISE pxGrid workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0816",
    "type": "single",
    "question": "[TrustSec tagging] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 816)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0817",
    "type": "multiple",
    "question": "[Segment routing telemetry] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 817)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0818",
    "type": "fill",
    "question": "[LISP control-plane API] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 818. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0819",
    "type": "lab",
    "question": "[Multicast automation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Multicast automation\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00819\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0820",
    "type": "dragdrop",
    "question": "[MPLS VPN orchestration] Arrange the automation workflow in the correct order. (Scenario 820)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: MPLS VPN orchestration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0821",
    "type": "single",
    "question": "[EVPN automation] Which status code indicates a successful REST API resource creation request? (Scenario 821)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0822",
    "type": "multiple",
    "question": "[VXLAN provisioning] Select TWO signals that should trigger automated rollback logic. (Scenario 822)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0823",
    "type": "fill",
    "question": "[Spine-leaf fabric validation] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 823. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0824",
    "type": "lab",
    "question": "[Day-2 operations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Day-2 operations\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00824\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0825",
    "type": "dragdrop",
    "question": "[Drift remediation] Arrange the automation workflow in the correct order. (Scenario 825)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Drift remediation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0826",
    "type": "single",
    "question": "[Patch management automation] What is the primary purpose of idempotency in network automation tasks? (Scenario 826)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0827",
    "type": "multiple",
    "question": "[Inventory reconciliation] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 827)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0828",
    "type": "fill",
    "question": "[Compliance evidence export] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 828. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0829",
    "type": "lab",
    "question": "[Audit trail integrity] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Audit trail integrity\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00829\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0830",
    "type": "dragdrop",
    "question": "[Data retention policies] Arrange the automation workflow in the correct order. (Scenario 830)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Data retention policies change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0831",
    "type": "single",
    "question": "[Runbook automation] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 831)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0832",
    "type": "multiple",
    "question": "[ChatOps approvals] Select TWO data modeling standards used frequently in network programmability. (Scenario 832)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0833",
    "type": "fill",
    "question": "[Slack webhooks] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 833. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0834",
    "type": "lab",
    "question": "[Microsoft Teams bots] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Microsoft Teams bots\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00834\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0835",
    "type": "dragdrop",
    "question": "[Incident command workflows] Arrange the automation workflow in the correct order. (Scenario 835)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Incident command workflows change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0836",
    "type": "single",
    "question": "[Business continuity tests] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 836)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0837",
    "type": "multiple",
    "question": "[Disaster recovery drills] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 837)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0838",
    "type": "fill",
    "question": "[Performance baselining] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 838. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0839",
    "type": "lab",
    "question": "[Capacity forecasting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Capacity forecasting\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00839\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0840",
    "type": "dragdrop",
    "question": "[AIOps enrichment] Arrange the automation workflow in the correct order. (Scenario 840)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: AIOps enrichment change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0841",
    "type": "single",
    "question": "[Root-cause automation] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 841)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0842",
    "type": "multiple",
    "question": "[Synthetic testing] Select TWO outputs useful for compliance evidence collection. (Scenario 842)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0843",
    "type": "fill",
    "question": "[API gateway policies] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 843. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0844",
    "type": "lab",
    "question": "[Circuit breaker patterns] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Circuit breaker patterns\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00844\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0845",
    "type": "dragdrop",
    "question": "[Timeout strategy] Arrange the automation workflow in the correct order. (Scenario 845)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Timeout strategy change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0846",
    "type": "single",
    "question": "[Schema validation] In CI/CD for network changes, what should run before deployment to production? (Scenario 846)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0847",
    "type": "multiple",
    "question": "[NETCONF] Select TWO characteristics of well-designed automation runbooks. (Scenario 847)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0848",
    "type": "fill",
    "question": "[RESTCONF] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 848. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0849",
    "type": "lab",
    "question": "[YANG models] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"YANG models\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00849\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0850",
    "type": "dragdrop",
    "question": "[Cisco DNA Center] Arrange the automation workflow in the correct order. (Scenario 850)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Cisco DNA Center change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0851",
    "type": "single",
    "question": "[Cisco NSO] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 851)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0852",
    "type": "multiple",
    "question": "[Ansible automation] Select TWO practices that improve API automation reliability. (Scenario 852)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0853",
    "type": "fill",
    "question": "[Python requests] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 853. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0854",
    "type": "lab",
    "question": "[Jinja2 templates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Jinja2 templates\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00854\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0855",
    "type": "dragdrop",
    "question": "[GitOps pipeline] Arrange the automation workflow in the correct order. (Scenario 855)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: GitOps pipeline change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0856",
    "type": "single",
    "question": "[CI/CD workflow] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 856)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0857",
    "type": "multiple",
    "question": "[OAuth2 token handling] Select TWO authentication approaches commonly used for API access. (Scenario 857)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0858",
    "type": "fill",
    "question": "[API rate limiting] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 858. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0859",
    "type": "lab",
    "question": "[JSON parsing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"JSON parsing\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00859\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0860",
    "type": "dragdrop",
    "question": "[YAML inventory] Arrange the automation workflow in the correct order. (Scenario 860)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: YAML inventory change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0861",
    "type": "single",
    "question": "[NTP automation] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 861)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0862",
    "type": "multiple",
    "question": "[SNMP telemetry] Select TWO benefits of using source control for network automation code. (Scenario 862)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0863",
    "type": "fill",
    "question": "[gNMI subscriptions] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 863. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0864",
    "type": "lab",
    "question": "[Model-driven telemetry] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Model-driven telemetry\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00864\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0865",
    "type": "dragdrop",
    "question": "[EEM automation] Arrange the automation workflow in the correct order. (Scenario 865)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: EEM automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0866",
    "type": "single",
    "question": "[IP SLA monitoring] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 866)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0867",
    "type": "multiple",
    "question": "[PyATS testing] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 867)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0868",
    "type": "fill",
    "question": "[Genie parsers] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 868. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0869",
    "type": "lab",
    "question": "[Webhook integrations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Webhook integrations\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00869\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0870",
    "type": "dragdrop",
    "question": "[Kafka streaming] Arrange the automation workflow in the correct order. (Scenario 870)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Kafka streaming change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0871",
    "type": "single",
    "question": "[ThousandEyes API] Which status code indicates a successful REST API resource creation request? (Scenario 871)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0872",
    "type": "multiple",
    "question": "[Meraki Dashboard API] Select TWO signals that should trigger automated rollback logic. (Scenario 872)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0873",
    "type": "fill",
    "question": "[Webex API] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 873. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0874",
    "type": "lab",
    "question": "[ACI REST API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ACI REST API\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00874\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0875",
    "type": "dragdrop",
    "question": "[NX-API] Arrange the automation workflow in the correct order. (Scenario 875)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: NX-API change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0876",
    "type": "single",
    "question": "[IOS XE programmability] What is the primary purpose of idempotency in network automation tasks? (Scenario 876)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0877",
    "type": "multiple",
    "question": "[Postman collections] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 877)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0878",
    "type": "fill",
    "question": "[Terraform providers] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 878. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0879",
    "type": "lab",
    "question": "[Puppet manifests] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Puppet manifests\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00879\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0880",
    "type": "dragdrop",
    "question": "[SaltStack states] Arrange the automation workflow in the correct order. (Scenario 880)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: SaltStack states change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0881",
    "type": "single",
    "question": "[Event-driven automation] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 881)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0882",
    "type": "multiple",
    "question": "[Message queues] Select TWO data modeling standards used frequently in network programmability. (Scenario 882)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0883",
    "type": "fill",
    "question": "[ServiceNow integration] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 883. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0884",
    "type": "lab",
    "question": "[ITSM workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"ITSM workflows\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00884\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0885",
    "type": "dragdrop",
    "question": "[Device onboarding] Arrange the automation workflow in the correct order. (Scenario 885)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Device onboarding change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0886",
    "type": "single",
    "question": "[Zero Touch Provisioning] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 886)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0887",
    "type": "multiple",
    "question": "[Template versioning] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 887)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0888",
    "type": "fill",
    "question": "[Config drift detection] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 888. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0889",
    "type": "lab",
    "question": "[Compliance auditing] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Compliance auditing\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00889\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0890",
    "type": "dragdrop",
    "question": "[Role-based access control] Arrange the automation workflow in the correct order. (Scenario 890)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Role-based access control change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0891",
    "type": "single",
    "question": "[AAA automation] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 891)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0892",
    "type": "multiple",
    "question": "[PKI certificate rotation] Select TWO outputs useful for compliance evidence collection. (Scenario 892)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0893",
    "type": "fill",
    "question": "[TLS profiles] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 893. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0894",
    "type": "lab",
    "question": "[MFA API flow] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"MFA API flow\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00894\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0895",
    "type": "dragdrop",
    "question": "[Data serialization] Arrange the automation workflow in the correct order. (Scenario 895)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Data serialization change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0896",
    "type": "single",
    "question": "[XML payloads] In CI/CD for network changes, what should run before deployment to production? (Scenario 896)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0897",
    "type": "multiple",
    "question": "[JSON schemas] Select TWO characteristics of well-designed automation runbooks. (Scenario 897)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0898",
    "type": "fill",
    "question": "[OpenAPI specs] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 898. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0899",
    "type": "lab",
    "question": "[Async Python] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Async Python\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00899\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0900",
    "type": "dragdrop",
    "question": "[Threading models] Arrange the automation workflow in the correct order. (Scenario 900)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Threading models change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0901",
    "type": "single",
    "question": "[Retry backoff logic] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 901)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0902",
    "type": "multiple",
    "question": "[Idempotency checks] Select TWO practices that improve API automation reliability. (Scenario 902)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0903",
    "type": "fill",
    "question": "[Unit testing] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 903. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0904",
    "type": "lab",
    "question": "[Mock APIs] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Mock APIs\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00904\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0905",
    "type": "dragdrop",
    "question": "[Logging pipelines] Arrange the automation workflow in the correct order. (Scenario 905)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: Logging pipelines change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0906",
    "type": "single",
    "question": "[Observability metrics] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 906)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0907",
    "type": "multiple",
    "question": "[Prometheus exporters] Select TWO authentication approaches commonly used for API access. (Scenario 907)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0908",
    "type": "fill",
    "question": "[Grafana dashboards] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 908. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0909",
    "type": "lab",
    "question": "[Splunk HEC] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Splunk HEC\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00909\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0910",
    "type": "dragdrop",
    "question": "[Elastic ingestion] Arrange the automation workflow in the correct order. (Scenario 910)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Elastic ingestion change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0911",
    "type": "single",
    "question": "[Syslog normalization] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 911)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0912",
    "type": "multiple",
    "question": "[Interface automation] Select TWO benefits of using source control for network automation code. (Scenario 912)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0913",
    "type": "fill",
    "question": "[VLAN provisioning] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 913. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0914",
    "type": "lab",
    "question": "[VRF deployment] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"VRF deployment\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00914\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0915",
    "type": "dragdrop",
    "question": "[BGP policy automation] Arrange the automation workflow in the correct order. (Scenario 915)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: BGP policy automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0916",
    "type": "single",
    "question": "[OSPF baseline checks] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 916)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0917",
    "type": "multiple",
    "question": "[QoS policy deployment] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 917)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0918",
    "type": "fill",
    "question": "[ACL lifecycle] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 918. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0919",
    "type": "lab",
    "question": "[NAT policy updates] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"NAT policy updates\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00919\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0920",
    "type": "dragdrop",
    "question": "[DHCP operations] Arrange the automation workflow in the correct order. (Scenario 920)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: DHCP operations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0921",
    "type": "single",
    "question": "[DNS automation] Which status code indicates a successful REST API resource creation request? (Scenario 921)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0922",
    "type": "multiple",
    "question": "[Wireless LAN automation] Select TWO signals that should trigger automated rollback logic. (Scenario 922)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0923",
    "type": "fill",
    "question": "[SD-WAN API orchestration] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 923. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0924",
    "type": "lab",
    "question": "[Campus fabric workflows] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Campus fabric workflows\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00924\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0925",
    "type": "dragdrop",
    "question": "[WAN assurance] Arrange the automation workflow in the correct order. (Scenario 925)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: WAN assurance change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0926",
    "type": "single",
    "question": "[Fault remediation] What is the primary purpose of idempotency in network automation tasks? (Scenario 926)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0927",
    "type": "multiple",
    "question": "[Incident enrichment] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 927)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0928",
    "type": "fill",
    "question": "[Change approval gates] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 928. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0929",
    "type": "lab",
    "question": "[Canary deployments] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Canary deployments\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00929\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0930",
    "type": "dragdrop",
    "question": "[Blue-green rollout] Arrange the automation workflow in the correct order. (Scenario 930)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Blue-green rollout change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0931",
    "type": "single",
    "question": "[Rollback strategy] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 931)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0932",
    "type": "multiple",
    "question": "[Backup validation] Select TWO data modeling standards used frequently in network programmability. (Scenario 932)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0933",
    "type": "fill",
    "question": "[Golden config enforcement] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 933. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0934",
    "type": "lab",
    "question": "[Source-of-truth sync] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Source-of-truth sync\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00934\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0935",
    "type": "dragdrop",
    "question": "[NetBox integration] Arrange the automation workflow in the correct order. (Scenario 935)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: NetBox integration change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0936",
    "type": "single",
    "question": "[IPAM workflows] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 936)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0937",
    "type": "multiple",
    "question": "[Secrets management] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 937)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0938",
    "type": "fill",
    "question": "[Vault integration] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 938. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0939",
    "type": "lab",
    "question": "[Token expiration handling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Token expiration handling\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00939\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0940",
    "type": "dragdrop",
    "question": "[Pagination handling] Arrange the automation workflow in the correct order. (Scenario 940)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: Pagination handling change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0941",
    "type": "single",
    "question": "[Cursor-based APIs] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 941)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0942",
    "type": "multiple",
    "question": "[Bulk endpoint operations] Select TWO outputs useful for compliance evidence collection. (Scenario 942)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0943",
    "type": "fill",
    "question": "[Streaming telemetry] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 943. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0944",
    "type": "lab",
    "question": "[gRPC integrations] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"gRPC integrations\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00944\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:44:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0945",
    "type": "dragdrop",
    "question": "[SSH key rotation] Arrange the automation workflow in the correct order. (Scenario 945)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: SSH key rotation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0946",
    "type": "single",
    "question": "[Device health scoring] In CI/CD for network changes, what should run before deployment to production? (Scenario 946)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0947",
    "type": "multiple",
    "question": "[SLA dashboards] Select TWO characteristics of well-designed automation runbooks. (Scenario 947)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0948",
    "type": "fill",
    "question": "[Cloud on-ramp automation] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 948. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0949",
    "type": "lab",
    "question": "[Multicloud networking] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Multicloud networking\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00949\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:49:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-0950",
    "type": "dragdrop",
    "question": "[Firewall policy as code] Arrange the automation workflow in the correct order. (Scenario 950)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: Firewall policy as code change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0951",
    "type": "single",
    "question": "[Load balancer APIs] Which protocol is primarily used for model-driven configuration over SSH on Cisco IOS XE devices? (Scenario 951)",
    "options": [
      "NETCONF",
      "SNMPv2c",
      "TFTP",
      "Syslog"
    ],
    "c": "NETCONF",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0952",
    "type": "multiple",
    "question": "[Kubernetes networking] Select TWO practices that improve API automation reliability. (Scenario 952)",
    "options": [
      "Input validation",
      "Retry with exponential backoff",
      "Disabling all error handling",
      "Ignoring response codes",
      "Structured logging"
    ],
    "correct": [
      "Input validation",
      "Retry with exponential backoff"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0953",
    "type": "fill",
    "question": "[Service mesh telemetry] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 953. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0954",
    "type": "lab",
    "question": "[Endpoint profiling] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Endpoint profiling\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00954\",\n  \"status\": \"up\",\n  \"timestamp\": \"2026-04-14T12:54:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "up"
  },
  {
    "id": "ENAUTO-0955",
    "type": "dragdrop",
    "question": "[NAC integrations] Arrange the automation workflow in the correct order. (Scenario 955)",
    "options": [
      "Run dry validation",
      "Collect current state",
      "Deploy change",
      "Render intended config"
    ],
    "c": [
      "Collect current state",
      "Render intended config",
      "Run dry validation",
      "Deploy change"
    ],
    "prompt": "Scenario: NAC integrations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0956",
    "type": "single",
    "question": "[ISE pxGrid workflows] Which data format is most commonly used by RESTCONF payloads when integrating with modern controllers? (Scenario 956)",
    "options": [
      "JSON",
      "YAML",
      "CSV",
      "PCAP"
    ],
    "c": "JSON",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0957",
    "type": "multiple",
    "question": "[TrustSec tagging] Select TWO authentication approaches commonly used for API access. (Scenario 957)",
    "options": [
      "OAuth2 bearer token",
      "API key",
      "STP BPDU",
      "OSPF neighbor ID",
      "RIP timer"
    ],
    "correct": [
      "OAuth2 bearer token",
      "API key"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0958",
    "type": "fill",
    "question": "[Segment routing telemetry] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 958. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0959",
    "type": "lab",
    "question": "[LISP control-plane API] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"LISP control-plane API\",\n  \"device\": \"edge-6\",\n  \"workflow_id\": \"wf-00959\",\n  \"status\": \"down\",\n  \"timestamp\": \"2026-04-14T12:59:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "down"
  },
  {
    "id": "ENAUTO-0960",
    "type": "dragdrop",
    "question": "[Multicast automation] Arrange the automation workflow in the correct order. (Scenario 960)",
    "options": [
      "Validate response",
      "Authenticate to API",
      "Persist result",
      "Request resource"
    ],
    "c": [
      "Authenticate to API",
      "Request resource",
      "Validate response",
      "Persist result"
    ],
    "prompt": "Scenario: Multicast automation change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0961",
    "type": "single",
    "question": "[MPLS VPN orchestration] Which Python library is commonly used to perform HTTP requests against network APIs? (Scenario 961)",
    "options": [
      "requests",
      "paramiko",
      "numpy",
      "pandas"
    ],
    "c": "requests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0962",
    "type": "multiple",
    "question": "[EVPN automation] Select TWO benefits of using source control for network automation code. (Scenario 962)",
    "options": [
      "Change history tracking",
      "Peer review workflows",
      "Randomized execution order",
      "Higher packet throughput",
      "Automatic fiber calibration"
    ],
    "correct": [
      "Change history tracking",
      "Peer review workflows"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0963",
    "type": "fill",
    "question": "[VXLAN provisioning] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 963. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0964",
    "type": "lab",
    "question": "[Spine-leaf fabric validation] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Spine-leaf fabric validation\",\n  \"device\": \"edge-2\",\n  \"workflow_id\": \"wf-00964\",\n  \"status\": \"degraded\",\n  \"timestamp\": \"2026-04-14T12:04:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "degraded"
  },
  {
    "id": "ENAUTO-0965",
    "type": "dragdrop",
    "question": "[Day-2 operations] Arrange the automation workflow in the correct order. (Scenario 965)",
    "options": [
      "Run CI tests",
      "Create feature branch",
      "Merge to main",
      "Commit automation change"
    ],
    "c": [
      "Create feature branch",
      "Commit automation change",
      "Run CI tests",
      "Merge to main"
    ],
    "prompt": "Scenario: Day-2 operations change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0966",
    "type": "single",
    "question": "[Drift remediation] In Git-based automation, which branch usually represents the production-ready desired state? (Scenario 966)",
    "options": [
      "main",
      "feature/temp",
      "hotfix/local",
      "scratch"
    ],
    "c": "main",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0967",
    "type": "multiple",
    "question": "[Patch management automation] Select TWO HTTP methods typically considered safe/idempotent for read-heavy workflows. (Scenario 967)",
    "options": [
      "GET",
      "HEAD",
      "POST",
      "PATCH",
      "CONNECT"
    ],
    "correct": [
      "GET",
      "HEAD"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0968",
    "type": "fill",
    "question": "[Inventory reconciliation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 968. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0969",
    "type": "lab",
    "question": "[Compliance evidence export] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Compliance evidence export\",\n  \"device\": \"edge-7\",\n  \"workflow_id\": \"wf-00969\",\n  \"status\": \"failed\",\n  \"timestamp\": \"2026-04-14T12:09:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "failed"
  },
  {
    "id": "ENAUTO-0970",
    "type": "dragdrop",
    "question": "[Audit trail integrity] Arrange the automation workflow in the correct order. (Scenario 970)",
    "options": [
      "Execute playbook",
      "Load inventory",
      "Verify post-checks",
      "Filter target devices"
    ],
    "c": [
      "Load inventory",
      "Filter target devices",
      "Execute playbook",
      "Verify post-checks"
    ],
    "prompt": "Scenario: Audit trail integrity change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0971",
    "type": "single",
    "question": "[Data retention policies] Which status code indicates a successful REST API resource creation request? (Scenario 971)",
    "options": [
      "201",
      "404",
      "500",
      "302"
    ],
    "c": "201",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0972",
    "type": "multiple",
    "question": "[Runbook automation] Select TWO signals that should trigger automated rollback logic. (Scenario 972)",
    "options": [
      "Post-check validation failure",
      "Critical health KPI degradation",
      "Ticket category typo",
      "Weekend calendar flag",
      "Low monitor brightness"
    ],
    "correct": [
      "Post-check validation failure",
      "Critical health KPI degradation"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0973",
    "type": "fill",
    "question": "[ChatOps approvals] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 973. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0974",
    "type": "lab",
    "question": "[Slack webhooks] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Slack webhooks\",\n  \"device\": \"edge-3\",\n  \"workflow_id\": \"wf-00974\",\n  \"status\": \"success\",\n  \"timestamp\": \"2026-04-14T12:14:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "success"
  },
  {
    "id": "ENAUTO-0975",
    "type": "dragdrop",
    "question": "[Microsoft Teams bots] Arrange the automation workflow in the correct order. (Scenario 975)",
    "options": [
      "Apply automation task",
      "Open change ticket",
      "Run post-checks",
      "Run pre-checks"
    ],
    "c": [
      "Open change ticket",
      "Run pre-checks",
      "Apply automation task",
      "Run post-checks"
    ],
    "prompt": "Scenario: Microsoft Teams bots change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0976",
    "type": "single",
    "question": "[Incident command workflows] What is the primary purpose of idempotency in network automation tasks? (Scenario 976)",
    "options": [
      "Repeat runs without unintended changes",
      "Encrypt API payloads",
      "Compress configs",
      "Increase link speed"
    ],
    "c": "Repeat runs without unintended changes",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0977",
    "type": "multiple",
    "question": "[Business continuity tests] Select TWO artifacts commonly produced by test automation in CI pipelines. (Scenario 977)",
    "options": [
      "JUnit/XML test report",
      "Coverage report",
      "Handwritten sticky note",
      "Layer1 loopback plug",
      "Camera photo"
    ],
    "correct": [
      "JUnit/XML test report",
      "Coverage report"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0978",
    "type": "fill",
    "question": "[Disaster recovery drills] API scenario: You are automating read-only retrieval of interface operational state at endpoint /api/v1/interfaces/GigabitEthernet0/0/oper-status for change window 978. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "get",
      "GET"
    ]
  },
  {
    "id": "ENAUTO-0979",
    "type": "lab",
    "question": "[Performance baselining] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Performance baselining\",\n  \"device\": \"edge-8\",\n  \"workflow_id\": \"wf-00979\",\n  \"status\": \"warning\",\n  \"timestamp\": \"2026-04-14T12:19:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "warning"
  },
  {
    "id": "ENAUTO-0980",
    "type": "dragdrop",
    "question": "[Capacity forecasting] Arrange the automation workflow in the correct order. (Scenario 980)",
    "options": [
      "Peer-approve diff",
      "Read source-of-truth",
      "Push to devices",
      "Generate candidate config"
    ],
    "c": [
      "Read source-of-truth",
      "Generate candidate config",
      "Peer-approve diff",
      "Push to devices"
    ],
    "prompt": "Scenario: Capacity forecasting change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0981",
    "type": "single",
    "question": "[AIOps enrichment] Which mechanism is best for securely storing API credentials in automation pipelines? (Scenario 981)",
    "options": [
      "Secret manager or vault",
      "Hardcoded plain text",
      "Public wiki page",
      "Email attachment"
    ],
    "c": "Secret manager or vault",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0982",
    "type": "multiple",
    "question": "[Root-cause automation] Select TWO data modeling standards used frequently in network programmability. (Scenario 982)",
    "options": [
      "YANG",
      "OpenAPI",
      "BNC connector map",
      "PoE class list",
      "MDF floorplan"
    ],
    "correct": [
      "YANG",
      "OpenAPI"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0983",
    "type": "fill",
    "question": "[Synthetic testing] API scenario: You are automating create a new telemetry subscription resource at endpoint /api/v1/telemetry/subscriptions for change window 983. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "post",
      "POST"
    ]
  },
  {
    "id": "ENAUTO-0984",
    "type": "lab",
    "question": "[API gateway policies] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API gateway policies\",\n  \"device\": \"edge-4\",\n  \"workflow_id\": \"wf-00984\",\n  \"status\": \"unknown\",\n  \"timestamp\": \"2026-04-14T12:24:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "unknown"
  },
  {
    "id": "ENAUTO-0985",
    "type": "dragdrop",
    "question": "[Circuit breaker patterns] Arrange the automation workflow in the correct order. (Scenario 985)",
    "options": [
      "Execute API calls",
      "Start workflow",
      "Publish report",
      "Acquire credentials"
    ],
    "c": [
      "Start workflow",
      "Acquire credentials",
      "Execute API calls",
      "Publish report"
    ],
    "prompt": "Scenario: Circuit breaker patterns change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0986",
    "type": "single",
    "question": "[Timeout strategy] Which protocol is typically used by model-driven telemetry for efficient streaming subscriptions? (Scenario 986)",
    "options": [
      "gRPC",
      "FTP",
      "Telnet",
      "SMTP"
    ],
    "c": "gRPC",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0987",
    "type": "multiple",
    "question": "[Schema validation] Select TWO steps that usually occur before issuing a configuration change via API. (Scenario 987)",
    "options": [
      "Authenticate session",
      "Validate intended payload",
      "Disable syslog globally",
      "Factory reset device",
      "Clear ARP on all routers"
    ],
    "correct": [
      "Authenticate session",
      "Validate intended payload"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0988",
    "type": "fill",
    "question": "[NETCONF] API scenario: You are automating full replacement of an existing VLAN policy object at endpoint /api/v1/policies/vlan-core for change window 988. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "put",
      "PUT"
    ]
  },
  {
    "id": "ENAUTO-0989",
    "type": "lab",
    "question": "[RESTCONF] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"RESTCONF\",\n  \"device\": \"edge-9\",\n  \"workflow_id\": \"wf-00989\",\n  \"status\": \"healthy\",\n  \"timestamp\": \"2026-04-14T12:29:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "healthy"
  },
  {
    "id": "ENAUTO-0990",
    "type": "dragdrop",
    "question": "[YANG models] Arrange the automation workflow in the correct order. (Scenario 990)",
    "options": [
      "Preview planned changes",
      "Pull latest templates",
      "Enforce deployment",
      "Compile variables"
    ],
    "c": [
      "Pull latest templates",
      "Compile variables",
      "Preview planned changes",
      "Enforce deployment"
    ],
    "prompt": "Scenario: YANG models change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0991",
    "type": "single",
    "question": "[Cisco DNA Center] When parsing structured device output in Python, which format is easiest to traverse programmatically? (Scenario 991)",
    "options": [
      "JSON object",
      "Raw CLI banner",
      "Plain paragraph text",
      "Screenshot image"
    ],
    "c": "JSON object",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0992",
    "type": "multiple",
    "question": "[Cisco NSO] Select TWO outputs useful for compliance evidence collection. (Scenario 992)",
    "options": [
      "Timestamped config snapshot",
      "Signed execution log",
      "Unlabeled screenshot",
      "Temporary shell alias",
      "Local browser cache"
    ],
    "correct": [
      "Timestamped config snapshot",
      "Signed execution log"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0993",
    "type": "fill",
    "question": "[Ansible automation] API scenario: You are automating partial update of interface description only at endpoint /api/v1/interfaces/GigabitEthernet0/1 for change window 993. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "patch",
      "PATCH"
    ]
  },
  {
    "id": "ENAUTO-0994",
    "type": "lab",
    "question": "[Python requests] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"Python requests\",\n  \"device\": \"edge-5\",\n  \"workflow_id\": \"wf-00994\",\n  \"status\": \"critical\",\n  \"timestamp\": \"2026-04-14T12:34:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "critical"
  },
  {
    "id": "ENAUTO-0995",
    "type": "dragdrop",
    "question": "[Jinja2 templates] Arrange the automation workflow in the correct order. (Scenario 995)",
    "options": [
      "Remediate configuration",
      "Detect drift",
      "Record audit evidence",
      "Classify impact"
    ],
    "c": [
      "Detect drift",
      "Classify impact",
      "Remediate configuration",
      "Record audit evidence"
    ],
    "prompt": "Scenario: Jinja2 templates change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  },
  {
    "id": "ENAUTO-0996",
    "type": "single",
    "question": "[GitOps pipeline] In CI/CD for network changes, what should run before deployment to production? (Scenario 996)",
    "options": [
      "Automated validation tests",
      "Manual screenshot review only",
      "Random delay",
      "Immediate push without checks"
    ],
    "c": "Automated validation tests",
    "prompt": "Select one best answer."
  },
  {
    "id": "ENAUTO-0997",
    "type": "multiple",
    "question": "[CI/CD workflow] Select TWO characteristics of well-designed automation runbooks. (Scenario 997)",
    "options": [
      "Deterministic steps",
      "Documented rollback path",
      "Hidden dependencies",
      "Undeclared variables",
      "No error messages"
    ],
    "correct": [
      "Deterministic steps",
      "Documented rollback path"
    ],
    "prompt": "Select all correct answers as indicated by the question."
  },
  {
    "id": "ENAUTO-0998",
    "type": "fill",
    "question": "[OAuth2 token handling] API scenario: You are automating removal of an obsolete ACL object at endpoint /api/v1/acls/obsolete-edge-acl for change window 998. Which HTTP method should you use?",
    "prompt": "Context: choose the method that best matches the operation objective. Answer with one lowercase HTTP method.",
    "c": [
      "delete",
      "DELETE"
    ]
  },
  {
    "id": "ENAUTO-0999",
    "type": "lab",
    "question": "[API rate limiting] Determine the final device/service state from the JSON/API output below.",
    "prompt": "JSON/API output:\n{\n  \"service\": \"API rate limiting\",\n  \"device\": \"edge-1\",\n  \"workflow_id\": \"wf-00999\",\n  \"status\": \"provisioning\",\n  \"timestamp\": \"2026-04-14T12:39:00Z\"\n}\nReturn the exact value of the \"status\" field.",
    "correct": "provisioning"
  },
  {
    "id": "ENAUTO-1000",
    "type": "dragdrop",
    "question": "[JSON parsing] Arrange the automation workflow in the correct order. (Scenario 1000)",
    "options": [
      "Trigger remediation",
      "Collect telemetry",
      "Confirm recovery state",
      "Evaluate policy rules"
    ],
    "c": [
      "Collect telemetry",
      "Evaluate policy rules",
      "Trigger remediation",
      "Confirm recovery state"
    ],
    "prompt": "Scenario: JSON parsing change automation. Order the listed steps from FIRST executed action to FINAL action. Use each step exactly once."
  }
];
