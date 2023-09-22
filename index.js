module.exports = {
    branches: ["main"],
    tagFormat: "v${version}",
    "plugins": [
        ["@semantic-release/commit-analyzer",
            {
                "preset": "conventionalcommits",
                "releaseRules":[
                    { "scope": "no-release", "release": false },
                    { "breaking": true, "release": "major" },
                    { "type": "feat", "release": "minor" },
                    { "type": "fix", "release": "patch" },
                    { "type": "docs", "scope": "readme", "release": "patch" },
                    { "type": "refactor", "release": "patch" },
                    { "type": "perf", "release": "patch" },
                    { "type": "test", "release": "patch" },
                    { "type": "revert", "release": "patch" }
                ],
                "parserOpts": {
                    "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
                }
            }
        ],
        ["@semantic-release/release-notes-generator",
            {
                "preset": "conventionalcommits",
                "presetConfig": {
                    "types": [
                        { "type": "feat", "section": "Feature", "hidden": false },
                        { "type": "fix", "section": "Bug Fix", "hidden": false },
                        { "type": "docs", "section": "Docs", "hidden": false },
                        { "type": "style", "section": "Style", "hidden": false },
                        { "type": "refactor", "section": "Refactor", "hidden": false },
                        { "type": "perf", "section": "Performance", "hidden": false },
                        { "type": "test", "section": "Test", "hidden": false },
                        { "type": "build", "section": "Build", "hidden": false },
                        { "type": "ci", "section": "CI/CD", "hidden": false },
                        { "type": "chore", "section": "Chore", "hidden": true },
                        { "type": "revert", "section": "Revert", "hidden": false }
                    ]
                }
            }
        ],
        ["@semantic-release/exec",
            {
                "verifyReleaseCmd": "echo $v{nextRelease.version} > VERSION"
            }],
        ["@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md",
                "changelogTitle": "# Changelog\n\nAll notable changes to this project are documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com), [Conventional Commits](https://conventionalcommits.org) for commit guidelines and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for releases and tags."
            }],
        ["@semantic-release/git", {
            "assets": ["VERSION", "CHANGELOG.md"],
            "message": "chore(release): v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
        ],
        ["@semantic-release/github",
            {
                "successComment": false
            }
        ]
    ]
};